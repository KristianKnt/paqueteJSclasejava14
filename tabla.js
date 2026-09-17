const prompt = require('prompt-sync')();

/**
 * 
 * Realizar un programa que permita el ingreso de un número y muestre su tabla de
multiplicar (Los primeros 10 múltiplos). 
 */
// se usa la funcion prompt para solicitar al usuario que ingrese un número
// se usa parseInt para convertir el valor ingresado a un número entero
//let numero = parseInt(prompt("Ingrese un número para mostrar su tabla de multiplicar:"));

const numero = parseInt(prompt('Ingrese un número para mostrar su tabla de multiplicar: '));


// se verifica si el valor ingresado es un número válido
// como funciona isNaN: isNaN() es una función que determina si un valor es NaN (Not-a-Number).
// Devuelve true si el valor es NaN y false si no lo es. En este caso,
// se utiliza para verificar si el número ingresado por el usuario es un número válido 
// antes de mostrar la tabla de multiplicar.
// por ese motivo se usa ! para invertir el resultado
if (!isNaN(numero)) {
    console.log(`Tabla de multiplicar del ${numero}:`);
    for (let i = 1; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
} else {
    console.log("Por favor, ingrese un número válido.");
}