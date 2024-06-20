let pendientes = ['Tareas','Comida','Proyecto','Estudiar']
pendientes.forEach((pendientes,index) => {
    console.log(`${index} : ${pendientes}`)
})
const carrito = [
    {id:1,producto:'Libro'},
    {id:2,producto:'Camisa'},
    {id:3,producto:'Disco'},
]
carrito.forEach(producto => {
    console.log(`Tomaste ${producto.id} ${producto.producto}`)
})