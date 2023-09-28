var a = new Date()
var p = a.getHours()        
if (p < 12) {
    console.log('Bom dia!')
}else if(p <=18){
    console.log('Boa tarde!')
}else {
    console.log('Boa noite!')
}