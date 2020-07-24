let dobro = function (a){
    return 2 * a
}

dobro = (a) => { //funcao Arrow sempre será anônima, para chamá-lo em outro momento é preciso guardar seu return em uma variável
    return 2 * a
}

dobro = a => 2 * a //return implícito
console.log(dobro(Math.PI))
console.log('---------------------------')


let ola = function(){
    return 'Olá'
}

ola = () => 'Olá'
ola = _ => 'Olá' //possui um parâmetro
console.log(ola())