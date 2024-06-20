const carrito = [
    {nombre:'Monitor',precio:100},
    {nombre:'TV',precio:600},
    {nombre:'Tablet',precio:7700},
    {nombre:'Bocina',precio:80},
    {nombre:'Audífonos',precio:1090},
    {nombre:'Micrófono',precio:200},
]
const nuevoArreglo = carrito.map(function(producto){
    return `Artículo: ${producto.nombre} Producto: ${producto.precio}`
})
console.log(nuevoArreglo)