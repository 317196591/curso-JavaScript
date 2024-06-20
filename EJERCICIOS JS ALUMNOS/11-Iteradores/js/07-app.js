const carrito = [
    {id:1,producto:'Libro'},
    {id:2,producto:'Camisa'},
    {id:3,producto:'Disco'},
]
for(let i of carrito){
    console.log(i.producto)
}
let automovil={
    modelo:'Camaro',
    motor:'6',
    anio:'1892',
    marca:'Chevrolet'
}
for(let auto in automovil){
    console.log(`${auto} : ${automovil[auto]}`)
}