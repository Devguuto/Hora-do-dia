function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var FormAno = document.getElementById('TxtAno')
    var res = document.getElementById('res')
    if(FormAno.value.length == 0 || Number(FormAno.value) > ano) {
        window.alert('verifique os dados e tente novamente !')
    }else {
        var FormSex = document.getElementsByName('RadSex')
        var idade = ano - Number(FormAno.value)
        res.innerHTML = 'idade calulada: ' +idade
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
    }
    if (FormSex[0].checked){   
        genero = 'homem'
            if(idade >=0 && idade < 10) {
                //criança
                img.setAttribute('src', 'HomemCrianca.png')
            }else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'homemJovem.png')
            }else if (idade < 45) {
                //Adulto
                img.setAttribute('src', 'HomemAdulto.png')
            }else{
                //velho
                img.setAttribute('src', 'HomemVelho.png')
            }
    }else if (FormSex[1].checked){
        genero = 'mulher'
            if(idade >=0 && idade < 10) {
                //criança
                img.setAttribute('src', 'MulherCrianca.png')
            }else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'MulherJovem.png')
            }else if (idade < 45) {
                //Adulto
                img.setAttribute('src', 'MulherAdulta.png')
            }else{
                //velho
                img.setAttribute('src', 'MulherVelha.png')
        }
    }
    res.style.textAlign = 'center'
    res.innerHTML = "detectamos " +genero+ " com " +idade+ " anos."
    res.appendChild(img)
}