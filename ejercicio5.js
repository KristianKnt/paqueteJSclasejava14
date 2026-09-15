let primerNombre = "Carlos";
let primerApellido = "Gómez";
let añoNacimiento = 1998;

// asigando solo la primera letra del primer nombre y convirtiendola a minuscula
primerNombre=primerNombre.toLocaleLowerCase();
primerNombre = primerNombre[0];
// convirtiendo el primer apellido a minuscula
primerApellido=primerApellido.toLocaleLowerCase();

console.log(`su correo es ${primerNombre}${primerApellido}${String(añoNacimiento).slice(-2)}`);


