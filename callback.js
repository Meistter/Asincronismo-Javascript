function sum(num1, num2) {
    return num1 + num2;
}

function rest(num1, num2) {
    return num1 - num2;
}

function mult(num1, num2) {
    return num1 * num2;
}

function div(num1, num2) {
    return num1 / num2;
}


// Como podemos ver tenemos varias funciones con los mismos parametros, el callback nos va a ayudar a hacer solo
// un llamado al final, con los dos parametros (los numeros) y el callback definiendo la funcion a ejecutar, ejemplo:

function calc(num1, num2, callback) {
    return callback(num1, num2);
};

console.log(calc(4,5,sum)); //Aqui estamos dandod e parametros 4 y 5 y al callback le indicamos que va a ejecutar
// la funcion suma
console.log(calc(0,4,div));  //Cabe resaltar que no es necesario pasar los parentesis de la funcion en este caso


// PUNTO IMPORTANTE: no es necesario que se llame CallBack, puede tener otro nombre, ejemplo

function calc(num1, num2, sumTodo) {
    return sumTodo(num1, num2);
};

console.log(calc(4,5,sum));


// EL CALLBACK UNIDO CON EL SETTIMEOUT NOS PERMITE LLAMAR A UNA FUNCION DENTRO DE UN DETERMINADO TIEMPO DESEADO