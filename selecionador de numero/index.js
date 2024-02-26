var lista = document.getElementById("caixa")                        //criamos a variavel adicionar, onde ela recebe o seletor onde aparecerá as coisas
var numero = document.getElementById("txtn")                            //criamos a varivel "numero" onde ela recebe o txtn, que é responsavel por captar o numero adicionado no input
var res = document.getElementById('res')                             //criamos a variavel "res" que vai ser responsavel em aparecer os resultados da seleção
var vetor = []                                                          //criamos uma array onde vai ficar os valores digitado pelo usuario


function isnumero(n){                                                   //criamos a função isNumero, ela recebe o parametro do numero, e essa funcão vai dizer se o numero esta entre 0 e 100
    if(Number(n) >= 1 && Number(n) <=100) {                             //SE o Numero digitado for maior ou igual a 1 e menor ou igual a 100
        return true                                                     //retornará um valor verdade
    } else{                                                             //SENÃO retornará
        return false                                                    //Valor falso.
    }
}

function inlista(n,l) {                                                // criamos a função lista, onde a mesma vai ser repsonsavel por conferir se o numero ja esta na lista, ou não.
    if(l.indexOf(Number(n)) != -1 ) {                                   // SE o valor Numero for diferente de (valor não encontrado)
        return true                                                     // Irá nos retornar um valor verdadeiro
    }else{                                                              // SENÃO
        return false                                                    // Irá nos retornar um valor falso
    }
}


function add() {                                                        //criamos a primeira função, que esta interligada ao clicar no botao adicionar
    if(isnumero(numero.value) && !inlista(numero.value, vetor)){        //SE o função "isnumero" e a função "inlista" for verdadeira  vai rodar o codigo                 
        vetor.push(Number(numero.value))                                //irá puchar o valor que esta dentro do numero.value para dentro do vetor
        var item = document.createElement('option')
        item.text = `Valor ${numero.value} foi adicionado`
        lista.appendChild(item)
        res.innerHTML = ""
    } else {
        window.alert('Número não invalidado, ou ja esta na lista' )
    }
    numero.value=""
    numero.focus()
}


function finalizar() {
    if(vetor.length == 0) {
        window.alert('Adicione valores antes de finalizar')

    }else {
        var total = vetor.length
        var maior = 
        var ordem = vetor.sort()
        
        
        
        
        res.innerHTML = ""
        res.innerHTML += `<p>Ao todo, temos ${total} números cadastrados</p>`
        res.innerHTML += `<p>a ordem dos valores são. ${ordem}</p>`
    
    }
}