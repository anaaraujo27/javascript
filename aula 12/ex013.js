var a = new Date()
var s = a.getDay()
/*
    Domingo
    Segunda
    Terça
    Quarta
    Quinta
    Sexta
    Sábado
*/

console.log(s)

switch(s) {
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda')
        break
    case 2:
        console.log('Terça')
        break
    case 3:
        console.log('Quarta')
        break
    case 4:
        console.log('Quinta')
        break
    case 5:
        console.log('Sexta')
        break
    case 6:
        console.log('Sabado')
        break
}