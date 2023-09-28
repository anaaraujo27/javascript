function gritar(ex) {
    return ex.toUpperCase() + '!!!'
}
let x = gritar ('bom dia')   
console.log(x)
//funções com parametros não obrigatório:
function soma(a=0 , b=0) {
    return a + b
} 
let r = soma(4)
console.log(r)