const persona = {nombre:"Alex",
    apellidos:"Romero Ramírez"}
console.log(persona.nombre)
console.log(persona['apellidos'])
persona.edad = 20
console.log(persona)
delete persona.apellidos
console.log(persona)