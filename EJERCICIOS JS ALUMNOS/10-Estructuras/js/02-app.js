let rol = 'EDITOR'
if(rol==='ADMIN'){
    console.log("Editar, eliminar y ver información")
}
else if(rol === "VISITANTE"){
    console.log("Sólo puedes ver información")
}
else{
    console.log("Puedes editar información")
}