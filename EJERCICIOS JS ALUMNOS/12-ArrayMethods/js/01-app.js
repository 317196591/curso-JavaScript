const meses = ['Enero','Febrero','Marzo','Abril','Mayo','Junio']
meses.forEach(mes => {
    if(mes=='Enero'){
        console.log("Enero sí existe")
    }
})
const resultado = meses.includes('Enero')
console.log(resultado)
const carrito = [
    {nombre:'Monitor',precio:200,descuento:false},
    {nombre:'TV',precio:2300,descuento:true},
    {nombre:'Audífonos',precio:700,descuento:true},
    {nombre:'Zapato',precio:900,descuento:false}
]
const existe = carrito.some(producto => producto.nombre === 'Celular')
console.log(existe)