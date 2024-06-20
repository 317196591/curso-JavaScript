const metodoPago = "F"
switch(metodoPago){
    case "EFECTIVO":
        console.log("Compra pagada en efectivo.")
        break
    case "CHEQUE":
        console.log("Pagaste con cheque")
        break
    case "TARJETA":
        console.log("Pagaste con tarjeta")
        break
    default:
        console.log("Aún no has pagado")
        break
}