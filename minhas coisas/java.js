let num1 = document.getElementById('txtn1')
let num2 = document.getElementById('txtn2')
let txt = document.getElementById('res')
let n1 = Number(num1.value)
let n2 = Number(num2.value)


    function soma() {
        let res = n1 + n2
        txt.innerHTML = `${res}`
    }

    function subtração() {
       let res = n1 - n2
    txt.innerHTML = `${res}`
    }

    function multiplicação() {
       let res = n1 * n2
    txt.innerHTML = `${res}`
    }

    function divisão() {
       let res = n1 / n2
    txt.innerHTML = `${res}`
    }

