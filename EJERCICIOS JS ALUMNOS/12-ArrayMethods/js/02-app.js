const meses = ['Enero','Febrero','Marzo','Abril','Mayo','Junio']
const carrito = [
    {nombre:'Monitor',precio:200,descuento:false},
    {nombre:'TV',precio:2300,descuento:true},
    {nombre:'Audífonos',precio:700,descuento:true},
    {nombre:'Zapato',precio:900,descuento:false}
]
const indice = meses.findIndex(mes => mes==='Abril')
console.log(indice)