//objeto: é uma coleção dinâmica de pares chaves/valor
const produto = new Object
produto.nome = 'Cadeira'
produto['marca do produto'] = 'Generia'
produto.preco = 220

console.log(produto)

delete produto.preco
delete produto['marca do produto']
console.log(produto)

const carro = {
   modelo: 'A4',
   valor: 89000,
   proprietario: {
      nome: 'Raul',
      idade: 56,
      endereco: {
         logradouro: 'Rua ABC',
         numero: 123
      }
   },
   condutores: [{
      nome: 'Junior',
      idade: 19
   }, {
      nome: 'Ana',
      idade: 42
   }],
   calcularValorSeguro: function (){

   }
}
