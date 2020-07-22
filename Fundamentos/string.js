const escola = "Cod3r"

console.log(escola.charAt(4))//printa a 4ª letra da constante
console.log(escola.charAt(5))
console.log(escola.charCodeAt(3))//printa o valor html da letra da constante
console.log(escola.indexOf('3'))

console.log(escola.substring(1)) //printa a consntante sem a primeira letra
console.log(escola.substring(0,3))//printa os 3 primeiros caracteres da constante

console.log('Escola '.concat(escola).concat("!")) //concatenar
console.log('Escola ' + escola + "!") //concatenar
console.log(escola.replace(/\w/, 'e'))//substitui a primeira letra por E

console.log(('Ana,Maria,Pedro').split(','))