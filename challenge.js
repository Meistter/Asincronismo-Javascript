// Primero debemos declarar e importar el paquete de XMLHttpRequest,
const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest
// Declaramos como constante el url de la API:
const API = 'https://api.escuelajs.co/api/v1'

// Definimos la funcion principal

function fetchData(urlApi, callback) {
// El primer parametro es la url de la api que trabajaremos, el segundo es la funcion a ejecutar
// Debemos ahora instanciar el objeto XMLHttpRequest() en una variable
let xhttp = new XMLHttpRequest();
// A este objeto llamamos la propiedad Open para poder acceder y manipular la informacion de la API
xhttp.open('GET', urlApi, true);

// El primer elemento  es el tipo de solicitud que haremos, el segundo la URL de la api y el tercero es un valor
// booleano que representa si usaremos o no asincronismo
// Una vez hecho esto usaremos una funcion anonima para verificar si hubo error, para esto usamos la funcion:
	xhttp.onreadystatechange = function (e) { //Esta funcion captura el readyState cada vez que cambia (codigo 0-4)
    // El ready state cambia desde el cero hasta el 4, cuando llega a 4 significa que terminó de procesar

// por eso aqui preguntamos si ya el codigo es 4, en caso de ser 4 preguntamos si el status es 200(exitoso)
		if (xhttp.readyState === 4) {
			if (xhttp.status === 200) {
				callback(null, JSON.parse(xhttp.responseText)); //el primer argumento es en caso de error, pero como ya validamos eso
				// lo dejamos en null, el segundo para
				// parsear la respuesta a un formato usable (json en este caso)
			} else  { //Si el codigo no fue exitoso (200) entonces
				const error = new Error('error' + urlApi); //declaramos una constante error con una instancia de Error
				return callback(error, null); //Le pasamos al callback el error y en la parte de los datos null
			} 
		}
	}
xhttp.send();
}
// Una vez validada y lista nuestra funcion procedemos a enviar la peticion

// Ahora haremos uso de la funcion fechData que creamos


fetchData(`${API}/products`, function(error1, data1){
	if (error1) return console.log(error1);
	fetchData(`${API}/products/${data1[0].id}`, function(error2, data2){
		if (error2) return console.log(error2);
		fetchData(`${API}/categories/${data2?.category?.id}`, function(error3, data3){
			if (error3) return console.log(error3);

			console.log(data1[0]);
			console.log(data2.title);
			console.log(data3.name);

		})
	})
})
