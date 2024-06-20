for(let i=0;i<=10;i=i+2){
    console.log(`Numero = ${i}`)
}
for(let i=0;i<=10;i++){
    if(i%2==0){
        console.log(`Número ${i} es par`)
    }
    else{
        console.log(`Número ${i} es impar`)
    }
}
const carrito = [
    {nombre:'Monitor',precio:200},
    {nombre:'TV',precio:2300},
    {nombre:'Audífonos',precio:700},
    {nombre:'Celular',precio:900}
]
for(let j=0;j<carrito.length;j++){
    console.log(carrito[j].nombre,carrito[j].precio)
}