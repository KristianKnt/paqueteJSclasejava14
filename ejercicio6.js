let edad = 20;
let tieneEntrada = true;
let esMayorDeEdad = edad >= 18;
let puedeIngresar = esMayorDeEdad && tieneEntrada;
let necesitaAcompañante = !esMayorDeEdad || !tieneEntrada;

/**
 * 
 * imprimer en consola  el valor de esMayorDeEdad, el valor de puedeIngresar y el valor de necesitaAcompañante
 * 
 */

console.log(`¿Es mayor de edad?: ${esMayorDeEdad}`);
console.log(`¿Puede ingresar?: ${puedeIngresar}`);
console.log(`¿Necesita acompañante?: ${necesitaAcompañante}`); 