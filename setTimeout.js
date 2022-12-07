// Cuando usamos setTimeOut tenemos dos opcione en sus argumentos, podemos declarar una funcion y definir el tiempo 
// O podemos llamar una funcion, definir el tiempo y luego los argumentos a recibir

setTimeout(function (){
    console.log('Hola que tal');
},5000);


setTimeout(myfunction, 5000, 'Josue') //segunda forma

function myfunction(nombre){
    console.log(`Hola ${nombre}`); 
}