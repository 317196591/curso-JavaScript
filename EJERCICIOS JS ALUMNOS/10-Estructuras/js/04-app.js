const usuario = false
let puedesPagar = false
if (usuario && puedesPagar){
    console.log("Tu pedido se realizó con éxito.")
}
else if(!usuario){
    console.log("Inicia sesión antes")
}
else if(!puedesPagar){
    console.log("Hubo un error con tu pago.")
}
else{
    console.log("Error del servidor.")
}
let efectivo = 30
let credito = 400
let disponible = efectivo + credito
let carrito = 700
if(efectivo > carrito || credito > carrito){
    console.log("Puedes realizar tu compra.")
}
else if(disponible >= carrito){
    console.log("Pagar con ambos métodos.")
}
else{
    console.log("No puedes hacer la compra.")
}