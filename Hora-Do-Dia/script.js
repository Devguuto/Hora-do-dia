


function carregar () {                                                                      //chamamos a função e demos para ela o nome de 'carregar' 
    var titulo = window.document.getElementById ('titulo')                                  //criamos a variavel titulo e demos a ela o valor do id "titulo"  que foi criado no HTML, sendo assim, essa variavel é responsavel pelo titulo do site
    var msg = window.document.getElementById('msg')                                         //criamos a variavel msg e demos a ela o id "msg" que foi criado no HTML,sendo assim ela fica responsavel pelo texto que aparece na primeira div
    var img = window.document.getElementById('Imagem')                                      //criamos a variavel img e demos a ela o id "imagem" que foi criado no HTML, sendo assim ela fica responsavel pela imagem que vai aparer na tela
    var data = new Date()                                                                   // criamos a variavel data, e puxamos para dentro ela o valor das informações de data do usuario com o "new date"
    var hora = 8 //data.getHours()                                                              //criamos a variavel hora, e dentro dela, puxamos o horario do usuario, colhendo as informações da variavel data, que tem essas informações 
    var min = data.getMinutes()                                                             //criamos a variavel min, e dentro dela, puxamos os minutos do usuario, colhendo as informações da variavel data, que tem essas informações    
    if (hora >= 0 && hora < 6) {                                                            //criamos a condição composta "if else" e dentro dela colocamos as informações que, se a var hora for >= 0 e a variavel hora for < 6 ele deve executar.
        titulo.innerHTML = 'Boa madrugada!'                                                 //colocamos ele pra executar dentro dessa condição uma mensagem de texto no titulo do site atravez do (var)titulo.innerHTML = 'MENSAGEM'
        msg.innerHTML = 'Seu horario atual é de ' +hora + ':' +min +  ' AM'                 //colocamos ele pra executar dentro dessa condição uma mensagem de texto na section acima da foto do site atravez do (var)msg.innerHTML = 'MENSAGEM'
        img.src = 'fotomadrugada.png'                                                       //colocamos ele dentro dessa condição para alterar a variavel img, dentro da section, utilizando o (var)img.src = 'arquivo'
        document.body.style.background = '#061926'                                          //colocamos ele para alterar o plano de fundo dentro dessa condição com o DOM = doc.body.style.background = cor 
    }else if (hora >= 6 && hora < 12) {                                                     // repetimos            
        msg.innerHTML = 'Seu horario atual é de ' +hora + ':' +min +  ' AM'                 // repetimos
        titulo.innerHTML = 'Bom dia !'                                                      // repetimos
        img.src = 'Fotomanha.png'                                                           // repetimos
        document.body.style.background = '#3d29af81'                                        // repetimos
    }else if (hora >= 12 && hora < 18) {                                                    // repetimos
        msg.innerHTML = 'Seu horario atual é de ' +hora + ':' +min + ' PM'                  // repetimos
        titulo.innerHTML = 'Boa tarde!'                                                     // repetimos
        img.src = 'fototarde.png'                                                           // repetimos
        document.body.style.background = '#b3490b'                                          // repetimos
    }else {                                                                                 // repetimos
        msg.innerHTML = 'Seu horario atual é de ' +hora + ':' +min +  ' PM'                 // repetimos
        titulo.innerHTML = 'Boa noite!'                                                     // repetimos
        img.src = 'fotonoite.png'                                                           // repetimos
        document.body.style.background ='#0c3e3f'                                           // repetimos
    }   
}                                                                                           //finalizamos.


