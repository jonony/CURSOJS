
/*

for(let i = 0; i <= 10; i++){
    const par = i % 2 === 0 ? '= Par' : '= Impar'
    console.log(i,par)
}

*/

const frutas = ['maçã', 'banana', 'melancia', 'Uva']

for(let i = 0; i < frutas.length; i++){
    console.log(`Indice ${i} `,frutas[i])
}

// Declaro uma variavel recebendo (i) => 'O contador irá começar do zero'
// Após, declaro um parâmetro de parada, onde => 'Se (i) for menor que 10'

// Logo, (i) irá receber um incremento => Equanto (i) for menor que 10 ele irá ser verdadeiro e irá receber mais um numero, quando for falsa, a expressão será encerrada

// i++ (O valor irá somar mais um valor encima)
// i+= (O valor informado irá pular casas, de acordo que for definida) => EX: i += 2 => irá pular 2 casas