function calcular(){
    var num = Number(document.querySelector("input#num-tabuada").value)

    for(var a=1; a <= 10; a++){
        document.querySelector("select#tabuada").innerHTML += `<option>${num} * ${a} = ${a * num}</option>`
    }
}