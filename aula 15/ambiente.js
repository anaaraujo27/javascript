let num = [5, 2, 8, 5, 3]
num.push(1) 
console.log(`valores: ${num}`)
console.log(`primeiro valor: ${num[0]}`)
console.log(`ultimo valor: ${num[4]}`)
console.log(`valores: ${num.length}`)
console.log(`ordem crescente: ${num.sort()}`)
let pos = num.indexOf(8)
if (pos == -1) {
    console.log('valor não encontrado')
}
else {
    console.log(pos) 
}
