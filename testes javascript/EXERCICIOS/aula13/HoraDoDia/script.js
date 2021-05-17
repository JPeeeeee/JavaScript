function carregar(){

var msg = document.getElementById("texto")
var img = document.getElementById("imgm")
var horario = new Date()
var hora = horario.getHours()
var minutos = horario.getMinutes()



if (hora >= 18 || hora < 6 ){
    msg.innerHTML = `Agora são ${hora + ":" + minutos} <br> Boa noite!`

    img.src = "./images/noite.png"

    document.body.style.backgroundColor = "#07395a"
} else if (hora < 12){
    msg.innerHTML = `Agora são ${hora + ":" + minutos} <br> Bom dia!`

    img.src = "./images/manha.png"

    document.body.style.backgroundColor = "#e6b889"
} else{
    msg.innerHTML = `Agora são ${hora + ":" + minutos} <br> Boa tarde!`

    img.src = "./images/tarde.jpg"

    document.body.style.backgroundColor = "#fcb075"
}
} 
