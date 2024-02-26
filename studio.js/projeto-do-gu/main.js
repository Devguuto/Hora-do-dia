
function converter(){
    var us = window.document.getElementById('dolar')
    var rs = window.document.getElementById('real')
    var n1 = Number(us.value)
    var n2 = Number(rs.value)
    var multiplicador = n1 * n2
    var res = window.document.getElementById('result')
    res.innerText = multiplicador
}
