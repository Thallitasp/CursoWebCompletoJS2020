const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco:{
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

const { nome, idade} = pessoa //tire de dentro do objeto Pessoa o nome e a idade
console.log(nome, idade)

const { nome: n, idade: i } = pessoa
console.log(n, i)

const {sobrenome, bemHumorada = true} = pessoa //quando os atributos não estiverem presentes ele retornam como indefinidos
console.log(sobrenome, bemHumorada)

const {endereco: {logradouro, numero, cep} } = pessoa
console.log(logradouro, numero, cep)

