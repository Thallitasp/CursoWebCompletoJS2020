//Função em JS é First-Class Object (Citizens)
// Higher-order function

//criar função de forma literal
function fun1() { } //toda função em JS retorna dado, quando não se tem return ela tem resposta UNDEFINED

//Armazenar a função em uma variável
const fun2 = function () { }

//Armazenar função dentro do Array
const array = [function (a, b) { return a + b}, fun1, fun2]
console.log(array[0](2, 3))

//Armazenar função em um atributo objeto
const obj = {}
obj.falar = function () { return 'Opa!'}
console.log(obj.falar())

//Passar uma função como parâmetro para outra função
function run(fun){
    fun()
}

run(function() { console.log('Executando...')})

//Função retornando uma função
function soma(a, b){
    return function (c){
        console.log(a + b + c)
    }
}
soma(2,3)(5)
const exemplo = soma(2, 3)
exemplo(4)
