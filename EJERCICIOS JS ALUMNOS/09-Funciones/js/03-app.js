iniciarApp()
function iniciarApp(){
    console.log("Iniciando nuestra aplicación...")
    segundaFuncion()
}
function segundaFuncion(){
    console.log("Desde la segunda aplicación")
    usuarioAutenticado('Pablo')
}
function usuarioAutenticado(nombre){
    console.log("Autenticación correcta.")
    console.log(`Usuario ${nombre} `)
}
