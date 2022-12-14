// Aqui practicamos el uso del async y await con arrow functions
// tenemos una promesa con un timeout para emular asincronismo
const fnAsync = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve('Async resolved!'), 2000)
            : reject(new Error('Error!'));
    });
}

const anotherFn = async () => {
    console.log('Ya la llamamos, ahora llamaremos fnAsync y esperaremos a que se resuelva')
    const something = await fnAsync(); //cuanto se ejecuta el await la funcion se detiene hasta resolver el await, luego continua ejecutando la misma funcion (el siguiente log)
    console.log(something);
    console.log('Listo, ya se resolvió el proceso asincrono');
}

console.log('Antes de llamar anotherFn');
anotherFn();
console.log('Holaaa, me llamaron y no tengo que esperar a que termine el proceso asincrono');