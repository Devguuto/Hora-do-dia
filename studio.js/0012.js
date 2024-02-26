var agora = new Date
var hora  = agora.getHours()
console.log('suas horas são ' + hora)
if(hora== 0 || hora< 8) {
    console.log('boa madrugada!')
} else if (hora == 8 || hora <12){
    console.log('Bom dia!')
} else if (hora == 12 || hora <18){
    console.log('Boa tarde!')
} else if (hora == 18 || hora <24){
    console.log('Boa noite!')
}else{
    console.log('não existe')
}