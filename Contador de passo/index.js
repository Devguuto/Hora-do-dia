function contar(){ 
    var i = document.getElementById('inicio')
    var f = document.getElementById('fim')
    var p = document.getElementById('passo')
    var res= document.getElementById('res')
    var passo = Number(p.value)
    var inicio = Number(i.value)
    var fim =  Number(f.value)
    while(inicio<=fim) {
        res.innerHTML += "te amo ana " +inicio 
    inicio+= passo
    //for(let c = inicio; c <= fim ; c += passo) {
    //    res.innerHTML += c
    }
    }
