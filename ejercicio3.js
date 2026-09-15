let precioProducto = 50000;
let porcentajeIva = 19;
let valorIva = precioProducto * porcentajeIva / 100;

console.log(`El precio del producto es: ${precioProducto}`);
console.log(`El el valor del IVA es: ${valorIva}`);
console.log(`El precio total con IVA incluido ${precioProducto + valorIva}`);