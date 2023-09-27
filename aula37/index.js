const nome = ['Johny','Carvalho']

// for(let i = 0; i < nome.length; i++ ){
//    console.log(nome[i])
// }

for(let i in nome){
    console.log(nome[i])  // => console vai me retornar o valor e o indice
}


console.log('=================')


for(let valor of nome){
    console.log(valor)  // => console vai me retornar apenas o valor
}


console.log('=================')


nome.forEach(element => {
    console.log(element) // =>
});

// For Clássico - Geralmente com itéraveis (array ou strings)
// For in - Retorna o indice (strings, objects ou arrays)
// For of - Retorna o valor em si (iteráveis, arrays ou strings)