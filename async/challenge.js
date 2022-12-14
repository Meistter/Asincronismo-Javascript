import fetch from "node-fetch";
const API = 'https://api.escuelajs.co/api/v1'

// Ejemplo de uso del async y await con una api funcional
async function fetchData(urlApi){
    const response = await fetch(urlApi)
    const data = await response.json() //este await lo usamos para que la transformacion a formato json espere a la respuesta del response, de otro modo daria nulo o error
    return data
}
// Este es el metodo general que nos permitira hacer solicitudes a la API

const myFunction = async (urlApi) => {
    try{
        const products = await fetchData(`${urlApi}/products`); //Accedemos a la lista de productos de la API
        const product = await fetchData(`${urlApi}/products/${products[0].id}`); //de la lista obtenida anteriormente de productos (almacenada en la variable products) accedemos al 1er elemento de ese array y solicitamos el ID (lo cual trae al elemento completo no solo el ID)
        const category = await fetchData(`${urlApi}/categories/${product.category.id}`);//aqui lo que hacemos es buscar la categoria del producto especifico que conseguimos en el paso anterior, por lo que llamamos al producto, su categoria, y el id de su categoria (lo cual trae a la categoria completa no solo el ID)

        console.log(products); //imprimimos todos los productos
        console.log(product.title); //imprimimos el titulo del producto buscado (el primero del array)
        console.log(category.name); //imprimimos el nombre de la categoria del producto
    } catch(error) { //Atraparemos un error en caso de que haya uno
        console.error(error);
    }
}
myFunction(API)