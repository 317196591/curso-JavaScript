const carrito = [
    {nombre:'Monitor',precio:200,descuento:false},
    {nombre:'TV',precio:2000,descuento:true},
    {nombre:'Audífonos',precio:700,descuento:true},
    {nombre:'Zapato',precio:900,descuento:false}
]
let resultado = carrito.reduce((total,producto) => total + producto.precio, 0)
console.log(resultado)
let total = 0
carrito.forEach(producto => total += producto.precio)
console.log(total)