for(let i=0;i<=10;i++){
    if(i==5){
        console.log('Estamos en el cinco... FIN')
        break
    }
    console.log(`Número: ${i}`)
}
for(let i=0;i<=10;i++){
    if(i==5){
        console.log('Estamos en el cinco... Continuar')
        continue
    }
    console.log(`Número: ${i}`)
}
const carrito2 = [
    {nombre:'Monitor',precio:200,descuento:false},
    {nombre:'TV',precio:2300,descuento:true},
    {nombre:'Audífonos',precio:700,descuento:true},
    {nombre:'Celular',precio:900,descuento:false}
]
for(let i=0;i<carrito2.length;i++){
    if(carrito2[i].descuento==true){
        console.log(`El artículo ${carrito2[i].nombre} tiene descuento`)
        continue
    }
    console.log(carrito2[i].nombre)
}