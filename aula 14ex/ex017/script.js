//MediaQueryListEvent
//fazer um progama pra criar tabuada 
//testar
//aprimorar


function Tabuada() {
    
     let num = document.getElementById('txtn')
     let tab = document.getElementById('txtt')
   

if (num.value.length == 0) {
    window.alert('Confira os valores novamente')
}else {
    let n = Number(num.value)
    let o = 1
    tab.innerHTML = ''
    while (o <= 10) {
        let item = document.createElement('option')
        item.value = `tab${o}`
        item.text = `${o} x ${n} = ${n*o}`
        tab.appendChild(item)
        o++
    }
}
    
}