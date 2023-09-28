//você pode criar uma função dentro de outras funções

function simples() {

    function complexa() {
        
    } complexa
}

//função dentro de variaveis:

let m = function mul (a=1, b=1) {    //função anônima
    return a * b
}
console.log(m(3, 3))

// Uma função pode retornar OUTRA FUNÇÃO e tambem RECEBER uma função como PARAMETRO
// HIGUER-ORDER-FUNCTION

function executar (fn, n1, n2) {
    console.log(fn(n1, n2))
}

let soma = function (a, b) {
    return a + b
}

executar(soma, 2, 3)