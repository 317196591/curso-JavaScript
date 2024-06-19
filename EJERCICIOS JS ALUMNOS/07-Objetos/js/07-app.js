const persona = {
    nombre: "Alicia",
    apellido: "López",
}
const alumno = {
    numero_cuenta : "222222",
    creditos : "430"
}
const profesor = {
    numero_empleado: "555555",
    sueldo : 45555,
}

const resultado = {...alumno, ...persona}
console.log(resultado)