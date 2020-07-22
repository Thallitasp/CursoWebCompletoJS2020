let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo) //negar 2x é falar a verdade

console.log('os verdadeiros...')
console.log(!!3)
console.log(!!-11)
console.log(!!"  ")
console.log(!!"texto")
console.log(!!{})
console.log(!!Infinity)

console.log('Os FALSOS')
console.log(!!0)
console.log("")
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('Para finalizar...')
console.log('' || null || 0 || " ")
