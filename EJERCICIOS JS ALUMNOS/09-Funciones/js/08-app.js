//Alejandro Romero Ramírez
//1. Serie de Fibonacci
function fibonacci(n){
    if(n<2){
        return n
    }
    else{
        return(fibonacci(n-1)+fibonacci(n-2))
    }
}
function fibonacci_prim(n){
    let arrFib = []
    let cont = 0
    while(cont <= n){
        arrFib.push(fibonacci(cont))
        cont += 1
    }
    return arrFib
}
console.log(fibonacci_prim(8))
//Factorial de un número
function factorial(n){
    if(n === 0){
        return 1
    }
    else{
        return n * factorial(n-1)
    }
}
console.log(factorial(4))
//Conversión de moneda
function conversionMoneda(monto,origen,destino){
    let resultado = 0
    if(origen === 'D' || origen === 'd'){
        if(destino === 'D' || destino === 'd'){
            resultado = monto
        }
        if(destino === 'E' || destino === 'e'){
            resultado = monto * 1.5
        }
    }
    if(origen === 'P' || origen === 'p'){
        if(destino === 'D' || destino === 'd'){
            resultado = monto * 20.5
        }
        if(destino === 'E' || destino === 'e'){
            resultado = monto * 21
        }
    }
    return resultado
}
console.log(conversionMoneda(3,'P','D'))
//Números primos
function esPrimoyPar(n){
    if(n < 2){
        return false
    }
    else{
        for(let i=2;i<=Math.round((Math.sqrt(n))+1);i++){
            if(n%i===0){
                return false
            }
        }
    }
    return true
}
console.log(esPrimoyPar(11))
//Función encontrarMaximo
function encontrarMaximo(miArreglo,operador){
    if(operador === '>'){
        console.log(`El número mayor es: ${Math.max(...miArreglo)}`)
    }
    else if (operador === '<'){
        console.log(`El número menor es: ${Math.min(...miArreglo)}`)
    }
    else{
        console.log("Operador no válido.")
    }
}
encontrarMaximo([1,2,3],'<')