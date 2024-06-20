const carrito = []
const producto1 = {
    nombre:'Monitor',
    precio:600
}
const producto2 = {
    nombre:'Celular',
    precio:1000
}
const producto3 = {
    nombre:'Teclado',
    precio:200
}
let resultado = [...carrito,producto1]
resultado = [...resultado,producto2]
resultado = [producto3,...resultado]
console.log(resultado)
