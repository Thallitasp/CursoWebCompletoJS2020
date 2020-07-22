//Armazenar uma funcao dentro da variavel
const imprimirSoma = function (a, b){
    console.log(a+b)
}

imprimirSoma(2, 3)

//Armazenar uma funcao arrow em uma variavel
const soma =(a, b) =>{ //a seta substitui o nome 'function'
    return a + b
}

console.log(soma (3, 8))

//retorno implícito
const subtracao = (a, b) => a - b

console.log(subtracao(7, 3))
