var idade = 67

if (idade < 16){
        console.log('você ainda não pode votar')
} 
    else if (idade < 18 || idade >= 67){
    //não é necessário colocar que "idade >= 16" visto que isso ja foi dito na primeira condição
        console.log('voto opcional!')
    } 
    else {
        console.log('voto obrigatório!')
    }

