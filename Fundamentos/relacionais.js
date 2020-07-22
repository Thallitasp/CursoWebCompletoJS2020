console.log('01) ', '1' == 1) // 1 é igual a 1
console.log('02) ', '1' === 1) // 1 é estritamente igual a 1? não pq um é string o outro é número
console.log('03) ', '3' != 3) // são diferentes? não
console.log('04) ', '3' !== 3) //são estritamente diferentes? sim

console.log('05) ', 3 < 2)
console.log('06) ', 3 > 2)
console.log('07) ', 3 <= 2)
console.log('08) ', 3 >= 2)

const d1 = new Date(0)
const d2 = new Date(0)
console.log('09) ', d1 === d2)
console.log('10) ', d1 == d2)
console.log('11) ', d1.getTime() == d2.getTime())
console.log('11-2) ', d1.getTime() === d2.getTime())
console.log('12) ', undefined == null)
console.log('13) ', undefined === null)