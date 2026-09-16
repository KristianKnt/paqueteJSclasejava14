let carrito = [
    { producto: "Laptop", precio: 2500000, cantidad: 1 },
    { producto: "Mouse", precio: 80000, cantidad: 2 },
    { producto: "Teclado", precio: 150000, cantidad: 1 }
];


console.log(carrito); // Imprime el arreglo completo

console.log('Primer producto:', carrito[0].producto);

console.log('Precio del segundo producto:', carrito[1].precio);

console.log(`Cantidad del tercer producto: ${carrito[2].cantidad}`);

carrito.push({ producto: "monitor",precio:800000, cantidad:1})

console.log(carrito); // Imprime el arreglo completo

console.log(`Nuevo producto agregado: ${carrito[3].producto}`);

let total = 0;
for (let item of carrito) {
    total = total + (item.cantidad * item.precio);
}
console.log(`Total a pagar: ${total}`);
