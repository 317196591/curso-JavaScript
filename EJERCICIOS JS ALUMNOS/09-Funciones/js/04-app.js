function sumar(a,b){
    return a+b
}
const resultado = sumar(56,32)
console.log(resultado)
let total = 0
function agregarCarrito(precio){
    return total += precio
}
function calcularImpuesto(total){
    return total*1.15
}
total = agregarCarrito(200)
total = agregarCarrito(300)
total = agregarCarrito(400)
console.log(total)
let totalAPagar = calcularImpuesto(total)
console.log(`El total a pagar es de ${totalAPagar}`)