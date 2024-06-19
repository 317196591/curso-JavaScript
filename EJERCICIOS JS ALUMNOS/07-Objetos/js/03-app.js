const producto = {
    nombre : 'Monitor',
    tamano : '24 pulgadas',
    precio : 200,
    informacion : {
        procesador : "Core i3",
        capacidad : "1 TB"
    },
    tienda: 'Steren'
}
// Usando destructuring
const {nombre,tamano} = producto
console.log(nombre,tamano)
// Sin destructuring
console.log(producto.nombre,producto.tamano)
// Información del procesador sin destructuring
console.log(producto.informacion.procesador,producto.informacion.capacidad)