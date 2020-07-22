function imprimirSoma(a, b){
    console.log(a+b)
}

imprimirSoma(2, 3)
imprimirSoma(2)
imprimirSoma(2, 10, 7, 9, 11)
imprimirSoma()

//Funcao com retorno
function soma(a, b=0){
    return a+b
}

//soma(2, 7)
console.log(soma(2,7))
console.log(soma(7))
