const autenticado = false
const puedesPagar = false
console.log(autenticado ? "Sí es autenticado " : "No tienes cuenta")
console.log(autenticado && puedesPagar ? "Sí puedes pagar" : "No puedes pagar")
console.log(autenticado ? puedesPagar ? puedesPagar2() : "Estoy autenticado y no puedo pagar" : "No estoy autenticado y no puedo pagar")
if(autenticado){
    if(puedesPagar){
        console.log("Sí puedes pagar")
    }
    console.log("Estoy autenticado pero no puedo pagar")
} else console.log("No estoy autenticado y no puedo pagar")
function puedesPagar2(){
    console.log("Puedes pagar")
}