function calcular(){
    let i = Number(document.querySelector("#num-i-text").value)
    let f = Number(document.querySelector("#num-f-text").value)
    let p = Number(document.querySelector("#espacamento").value)

    if(i == "" || f == 0 || p == 0){
        window.alert("[ERRO] Insira um número válido!")
        document.location.reload()
    } else{
        document.querySelector("#resultado").innerHTML = ""
        for(i; i <= f; i += p){
            document.querySelector("#resultado").innerHTML += `\u{1F449} ${i} `
        } 
        document.querySelector("#resultado").innerHTML += `\u{1F3C1}`
    } 
}