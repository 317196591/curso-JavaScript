const persona = {nombre:"Alex",
    apellidos:"Romero Ramírez",
    edad: 20,
    carrera: "Derecho"}
Object.seal(persona)
persona.nombre = "Alejandro"
delete persona.nombre
persona.materno = "Ramírez"
console.log(persona)
console.log(Object.isSealed(persona))