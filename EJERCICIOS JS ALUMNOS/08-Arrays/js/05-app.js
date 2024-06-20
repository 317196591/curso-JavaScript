const carrito = []
const producto1 = {
    nombre:'Monitor',
    precio:600
}
const producto2 = {
    nombre:'Celular',
    precio:1000
}
carrito.push(producto1)
carrito.push(producto2)
console.log(carrito)
const producto3 = {
    nombre:'Teclado',
    precio:200
}
carrito.unshift(producto3)
console.log(carrito)