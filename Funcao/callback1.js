const fabricantes = ["Mercedes", "Audi", "BMW"]

function imprimir(nome, indice){
    console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprimir)
console.log("-------------------------")
fabricantes.forEach(function(fabricantes){
    console.log(fabricantes)
})
console.log("-------------------------")
fabricantes.forEach(fabricantes => console.log(fabricantes))