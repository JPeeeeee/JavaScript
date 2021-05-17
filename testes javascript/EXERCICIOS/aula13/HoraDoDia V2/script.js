const card = document.querySelector(".card")
const section = document.querySelector(".section")
const text = document.querySelector("p#textodiv")
const image = document.querySelector("img#img")
const footer = document.querySelector(".footer")

section.addEventListener("mousemove", (e) => {
    var xAxis = (window.innerWidth / 2 - e.pageX) / 25
    var yAxis = (window.innerHeight / 2 - e.pageY) / 25 
 
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`
 })

section.addEventListener("mouseenter", (e) => {
    footer.style.transform = "translateZ(180px)"
    card.style.transition = "none"
    text.style.transform = "translateZ(100px)"
    image.style.transform = "translateZ(150px)"
})

section.addEventListener("mouseleave", (e) => {
    footer.style.transform = "translateZ(0px)"
    footer.style.transition = "all 0.5s ease"
    image.style.transform = "translateZ(0px)"
    image.style.transition = "all 0.5s ease"
    text.style.transform = "translateZ(0px)"
    text.style.transition = "all 0.5s ease"
    card.style.transition = "all 0.5s ease"
    card.style.transform = `rotateY(0deg) rotateX(0deg)`
})

function onclickimg(){
    window.alert("Tá entediado fdp?")
}

function carregar(){
    var horario = new Date()
    var hora = horario.getHours()
    var minutos = horario.getMinutes()
    var img = document.querySelector("img#img")

    if (hora > 18 || hora < 6){
        document.querySelector("p#textodiv").innerHTML = `Agora são ${hora + ":" + minutos} horas <br> Boa noite!`

        img.src = "./images/noitepng.png"

        document.body.style.backgroundColor = "#07395a"
        if (minutos < 10){
            document.querySelector("p#textodiv").innerHTML = `Agora são ${hora + ":0" + minutos} horas <br> Boa noite!`
        } else{}
    } else if(hora < 12){
        document.querySelector("p#textodiv").innerHTML = `Agora são ${hora + ":" + minutos} horas <br> Bom dia!`

        img.src = "./images/manhapng.png"

        document.body.style.backgroundColor = "#e6b889"
        if (minutos < 10){
            document.querySelector("p#textodiv").innerHTML = `Agora são ${hora + ":0" + minutos} horas <br> Boa noite!`
        } else{}
    } else{
        document.querySelector("p#textodiv").innerHTML = `Agora são ${hora + ":" + minutos} horas <br> Boa tarde!`

        img.src = "./images/tardepng.png"

        document.body.style.backgroundColor = "#fcb075"
        if (minutos < 10){
            document.querySelector("p#textodiv").innerHTML = `Agora são ${hora + ":0" + minutos} horas <br> Boa noite!`
        } else{}
    }
}

