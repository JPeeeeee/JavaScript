var agora = new Date()
var hora =  agora.getHours()
var minutos = agora.getMinutes()


console.log(`Agora são(é) exatamente ${hora + ":" + minutos} hora(s)`)

if (hora < 6 || hora >= 18){
    console.log("Boa noite!")
}
else if (hora >= 12){
    console.log("Boa tarde!")
}
else{
    console.log("Bom dia!")
}