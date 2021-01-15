//pessoa -> end. de Memória -> {...}
const pessoa = {nome: 'João'}
pessoa.nome = 'Pedro'
console.log(pessoa)

//pessoa -> end. de Memória2 -> {...}
//pessoa = {nome: 'Ana'}
//console.log(pessoa)

Object.freeze(pessoa)
pessoa.nome = 'Maria'
console.log(pessoa.nome)

const pessoaConstante = Object.freeze({nome: 'João'})
console.log(pessoaConstante.nome)