function calcularimc(){
    var nome = String(document.getElementById("nome1"))
    var peso = Number.parseFloat(document.getElementById("peso1"))
    var altura = Number.parseFloat(document.getElementById("altura1"))

    var imc = (peso / altura**2)

    if(imc>18.5 && imc<24.9){
        window.alert("Você está saudável!")
    }
    else{

    }

}