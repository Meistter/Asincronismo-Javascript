//Declaración de la función del Generador pasando un argumento
function* iterate(array){
    for(let value of array){ //El loop del for revisa cada elemento del array
        yield value; //value es asignado en cada ciclo y el ciclo mantiene su estado
    }
}

const it = iterate(['Oscar', 'Omar', 'Ana', 'Lucia', 'Juan']); 

console.log(it.next().value); //Imprime el primer elemento del array: Oscar
console.log(it.next().value); //Imprime el segundo elemento del array: Omar
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value); //Si se coloca un sexto console, la consola indica "Undefined"


// un ejemplo para verlo mas simple
//Declaración de la función del Generador
function* gen(){
	yield 1;
	yield 2;
	yield 3;
}
const g = gen();

// llamamos la funcion 
// cuantas veces llamemos la funcion sera la cantidad que baje en las lineas yield, si usamos un arreglo como en el ejemplo anterior
// entonces el yield guarda el estado del arreglo y avanza en el arreglo la cantidad de veces que se llame la funcion
console.log(g.next().value);
console.log(g.next().value);