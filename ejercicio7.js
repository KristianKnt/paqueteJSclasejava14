let inventario = ["laptop", "mouse", "teclado", "monitor", "cable HDMI"];

console.log(`El inventario original es: ${inventario}`);
console.log(`El primer elemento del inventario es: ${inventario[0]}`);
console.log(`El último elemento del inventario es: ${inventario[inventario.length - 1]}`);
inventario.push("webcam");
console.log(`El inventario actualizado es: ${inventario}`);
let eliminado = inventario.pop();
console.log(`El elemento eliminado es: ${eliminado}`);
console.log(`El inventario actualizado es: ${inventario}`);
inventario.unshift("audifonos");
console.log(`El inventario actualizado es: ${inventario}`);
eliminado = inventario.shift();
console.log(`El elemento eliminado es: ${eliminado}`);
console.log(`El inventario actualizado es: ${inventario}`);
console.log(`la cantidad total de elementos es: ${inventario.length}`);
console.log(`El inventario ordenado es: ${inventario.sort()}`);