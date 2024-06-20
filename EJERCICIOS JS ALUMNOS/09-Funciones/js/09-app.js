const reproductor = {
    cancion: "",
    reproducir: nombre => {
        console.log(`Reproduciendo la canción con nombre ${nombre}`)
    },
    pausar : id => {
        console.log(`Pausando la canción con id ${id}`)
    },
    borrar : id => {
        console.log(`Borrando la canción con id ${id}`)
    },
    crearPlayList: nombre => {
        console.log(`Creando playlist ${nombre}`)
    },
    reproducirPlayList: nombre =>{
        console.log(`Reproduciendo playlist ${nombre}`)
    },
    set nuevaCancion(cancion){
        this.cancion = cancion
        console.log(`Añadiendo nueva canción ${cancion}`)
    },
    get obtenerCancion(){
        console.log(`${this.cancion}`)
    }
}
reproductor.reproducir("Hola")
reproductor.pausar(1)
reproductor.nuevaCancion = 'Enter Sandman'
reproductor.obtenerCancion