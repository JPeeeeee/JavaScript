function verificar(){
    var ano_nascimento = Number.parseInt(document.querySelector("input#txtano").value) 
    var ano_atual = new Date()
    var ano = ano_atual.getFullYear()
    var idade = (ano - ano_nascimento)
    var img = document.querySelector("img#divimg")

    
    
    if (ano_nascimento < 1900 || idade <= 2){
        window.alert("Insira um valor válido!")
        img.src = ""
        document.querySelector(".resultado").innerHTML = ``
    } else if (document.querySelector("input#txtano").value == 0){
        window.alert("Insira um valor válido!")   
        img.src = ""
        document.querySelector(".resultado").innerHTML = ``     
    } else if (document.querySelector("input#masc").checked){
            if (document.querySelector("input#txtano").value == 0){
                img.src = ""
            } else
        var sexo = "homem"
        img.src = "macho.png"
        document.querySelector(".resultado").innerHTML = `Você é um(a) ${sexo} de ${idade} anos de idade!`
    } else{
        var sexo = "mulher"
        img.src = "mulher.png"
        document.querySelector(".resultado").innerHTML = `Você é um(a) ${sexo} de ${idade} anos de idade!`
    }
        
    }
