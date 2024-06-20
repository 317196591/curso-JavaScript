const carrito = [
    {nombre:'Monitor',precio:100},
    {nombre:'TV',precio:600},
    {nombre:'Tablet',precio:7700},
    {nombre:'Bocina',precio:80},
    {nombre:'Audífonos',precio:1090},
    {nombre:'Micrófono',precio:200},
]
for(let i=0;i<carrito.length;i++){
    console.log(`Artículo: ${carrito[i].nombre} Precio: ${carrito[i].precio}`)
}
carrito.forEach(function(producto){
    console.log(`Artículo: ${producto.nombre} Precio: ${producto.precio}`)
})