function tabuada() {
    let num = document.getElementById('txtn')                                           //criando a variavel num, e dando a ela o elemento txtn
    let tab = document.getElementById('gerar')                                          //criando a variavel tab e dando a ela o elemento gerar
    if (num.value.length == 0){                                                         //SE a variavel num com o valor colocado do cliente tiver a quantidade de numeros = 0
        window.alert('digite um numero por favor!')                                     //sera transmitido a mensagem ''digite um numero, por favor! 
    }else {                                                                             //SENÃO 
        let n = Number(num.value)                                                       //cria a variavel 'n' e de a ela o numero digitado em "num"
        let c = 1                                                                       //variavel "C" recebe 1 
        tab.innerHTML = ""
        while (c <= 10) {                                                               // ENQUANTO a variavel "c" for menor ou igual a 10 REPITA
            var item = document.createElement('option')                                 //cria a variavel "item" e "item" recebe o elemento "option"
            item.text = `${n} x ${c} = ${n*c}`                                          //coloca dentro da variavel item e dentro do item coloca o texto e dentro do texto coloca multiplicação
            tab.appendChild(item)
            c++                                                                         // variavel n vai multiplicar a variavel c e vai mostrar na tela o resultado de nXc
        }                                                                               // depois que a primeira multiplicação for finalizada o valor do C vai ser adicionado mais 1
    }
}