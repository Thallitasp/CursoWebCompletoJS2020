let num1 = 1
let num2 = 2

num1++
console.log(num1)

--num1 //maior prioridade de execução
console.log(num1)

console.log(++num1 === num2--)