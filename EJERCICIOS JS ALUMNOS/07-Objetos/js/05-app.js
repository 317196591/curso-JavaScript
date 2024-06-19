const persona = {nombre:"Alex",
    apellidos:"Romero Ramírez"}
console.log(persona)
Object.freeze(persona)
persona.nombre = 'Alicia'
console.log(persona)
if(Object.isFrozen(persona)){
    alert("El objeto está congelado.")
}