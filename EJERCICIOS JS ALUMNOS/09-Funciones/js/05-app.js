const reproductor = {
    reproducir: function(nombre){
        console.log(`Reproduciendo la canción con nombre ${nombre}`)
    },
    pausar : function(id){
        console.log(`Pausando la canción con id ${id}`)
    },
    borrar : function(id){
        console.log(`Borrando la canción con id ${id}`)
    },
    crearPlayList: function(nombre){
        console.log(`Creando playlist ${nombre}`)
    },
    reproducirPlayList: function(nombre){
        console.log(`Reproduciendo playlist ${nombre}`)
    }
}
reproductor.reproducir('Himno')
reproductor.pausar(1)
reproductor.saltarCancion = function(nombre){
    console.log(`Saltando canción ${nombre}`)
}
reproductor.saltarCancion('Heavy Metal')