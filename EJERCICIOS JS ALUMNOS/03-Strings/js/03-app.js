const producto = "Monitor"
const pulgadas = "24 pulgadas"
console.log(producto.concat(" En Descuento"))
console.log(producto.concat(" "+pulgadas))
console.log(producto+" "+pulgadas)
console.log(producto+" tiene un tamaño de "+pulgadas)
console.log("El producto",producto,"es de",pulgadas)
console.log(`El producto ${producto}`)
const producto2 = "Mouse         "
console.log(producto2.trimStart())
console.log(producto2.trimEnd())
const nombre = "     Alex     "
console.log(nombre.trim().length)

