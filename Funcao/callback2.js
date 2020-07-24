const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

//sem callback
const notasBaixas = []
for(let i in notas){
    if(notas[i] < 7){
        notasBaixas.push(notas[i])
    }
}

console.log(notasBaixas)
console.log("--------------------------")

//com callback
const notasBaixas2 = notas.filter(function(nota){
    return nota < 7
})

console.log(notasBaixas2)
console.log("--------------------------")

const notasBaixas3 = notas.filter(nota => nota < 7)
console.log(notasBaixas3)
console.log("--------------------------")

const notasMenoresQue7 = nota => nota < 7
const notasBaixas4 = notas.filter(notasMenoresQue7)
console.log(notasBaixas4)