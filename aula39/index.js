function ramdom (min,max){
    const r = Math.random() * (max - min) + min;
    return Math.floor(r)
}

const min = 1
const max = 50
let rand = ramdom(min,max)

while(rand !== 10){
    rand = ramdom(min,max)
    console.log(rand)
}

// [while] irá checar a condição e executa o laço

// [do] irá executar o laço enquanto a condição for verdadeira