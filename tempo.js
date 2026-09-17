/**
 * 
 * Crear un objeto llamado alumno con un mínimo de 5 propiedades, mostrar dicho
objeto utilizando console.table() y también mostrar cada una de las propiedades del
objeto por separado.
 * 
 */


let alumno = {
    nombre: "Juan",
    edad: 20,
    carrera: "Ingeniería en Sistemas",
    promedio: 8.5,
    semestre: 4
};

console.table(alumno);

console.log("Nombre:", alumno.nombre);
console.log("Edad:", alumno.edad);
console.log("Carrera:", alumno.carrera);
console.log("Promedio:", alumno.promedio);
console.log("Semestre:", alumno.semestre);  