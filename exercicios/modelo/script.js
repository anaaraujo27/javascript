let num = document.getElementById('txtn')
let tab = document.getElementById('adci')
let res = document.getElementById('resnum')
let val = []

function isNumero(n ) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    }else
    return false
}

function inLista(n, l) {
    if(l.indexOf(Number(n)) != -1) {
        return true
    }else {
        return false
    }
}

function adicionar() {
   if (isNumero(num.value) && !inLista(num.value, val) ) { 
    val.push(Number(num.value))
    let item = document.createElement('option')
    item.text = `Valor ${num.value} adicionado`
    tab.appendChild(item)
    res.innerHTML = ''
    }else {
        window.alert('Confira o valor novamente, algo está ERRADO ou valor ja foi adicionado')
    }
    num.value = ''
    num.focus()
} 

function mostrar() {
    if (val == 0) {
        window.alert('Insira valores a tabela para finalizar')
    }else{
    res.innerHTML = ''
    let com = val.length
    let maior = val[0]
    let menor = val[0]
    let soma = 0
    let media = 0
    for (let pos in val) {
        soma += val[pos]
        if (val[pos] > maior) {
            maior = val[pos]
        }
        if (val[pos] < menor) {
            menor = val[pos]
        }
    }
    media = soma / com
    res.innerHTML += `<p>Ao todo temos ${com} valores</p>`
    res.innerHTML += `<p>Maior valor = ${maior}</p>`
    res.innerHTML += `<p>Menor valor = ${menor}</p>`
    res.innerHTML += `<p>A soma de todos os valores é = ${soma}</p>`
    res.innerHTML += `<p>A media dos valores é = ${media}</p>` 
    }
}

