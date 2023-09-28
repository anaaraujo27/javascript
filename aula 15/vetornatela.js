let v = [1, 3, 6]
v.sort()
/*console.log(v[0])
console.log(v[1])
console.log(v[2])*/

/*for( let pos=0; pos < v.length; pos++){
    console.log(`p = ${pos} v = ${v[pos]}`)
}*/

for(let pos in v) {
    console.log(v[pos]) // versão mais simples
}