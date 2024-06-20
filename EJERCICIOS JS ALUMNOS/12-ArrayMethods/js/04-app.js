const carrito = [
    {nombre:'Monitor',precio:200,descuento:false},
    {nombre:'TV',precio:2000,descuento:true},
    {nombre:'Audífonos',precio:700,descuento:true},
    {nombre:'Zapato',precio:900,descuento:false}
]
let resultado = carrito.filter(producto => producto.nombre !== 'Zapato')
console.log(resultado)