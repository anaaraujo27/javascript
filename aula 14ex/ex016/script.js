  //fazer o botão funcionar %
  //fazer a função funcionar %
  //fazer o programa de looping funcionar %
  //mostrar na tela a contagem 
  //adicionar os emogis
  //verificar se tudo esta funcionando corretamente
    
function contar() {
  let inicio = document.getElementById('inicio')
  let fim = document.getElementById('fim')
  let passo = document.getElementById('passo')
  let res = document.getElementById('res')

  if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0)  {
        window.alert('ALGO ESTÁ ERRADO, tente novamente')
  }else{
    res.innerHTML = 'Contagem: '
    i = Number(inicio.value)
    f = Number(fim.value)
    p = Number(passo.value)
    for (c = i; c <= f; c += p) {
      res.innerHTML += `${c} 💞`
    }
  }
}