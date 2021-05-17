function verificar(){
    var ano_nascimento = Number.parseInt(document.querySelector("input#txtano").value) 
    var ano_atual = new Date()
    var ano = ano_atual.getFullYear()
    var idade = (ano - ano_nascimento)
    var img = document.querySelector("img#divimg")
    var txt = document.querySelector(".resultado")

    if (document.querySelector("input#masc").checked){
        var sexo = "homem"
    } else {
        var sexo = "mulher"
    }

    if (idade > 120 || idade < 1){
        window.alert("[ERRO] Insira um ano válido!")
        img.src = ""
        txt.innerHTML = ``
    } else {

        if (document.querySelector("input#txtano").value == ""){
            window.alert("[ERRO] Insira um ano válido!")
            img.src = ""
            txt.innerHTML = ``
        } else {

            if(sexo == "mulher"){
                if (idade > 60){
                    img.src = "mulher-velha.png"
                    txt.innerHTML = `Você é um(a) idosa de ${idade} anos de idade!`
                } else if (idade < 15){
                    img.src = "menina.png"
                    txt.innerHTML = `Você é um(a) menina de ${idade} anos de idade!`
                } else {
                    img.src = "mulher.png"
                    txt.innerHTML = `Você é um(a) ${sexo} de ${idade} anos de idade!`
                }
            } else {
                if (idade > 60){
                    img.src = "homem-velho.png"
                    txt.innerHTML = `Você é um(a) idoso de ${idade} anos de idade!`
                } else if (idade < 15){
                    img.src = "menino.png"
                    txt.innerHTML = `Você é um(a) menino de ${idade} anos de idade!`
                } else {
                    img.src = "macho.png"
                    txt.innerHTML = `Você é um(a) ${sexo} de ${idade} anos de idade!`
                }
            }
        }
    }
}    