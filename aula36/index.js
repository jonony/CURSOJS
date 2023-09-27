
const pessoa = {
    nome: 'johny',
    sobrenome: 'carvalho',
    idade: 21
}

for(let chave in pessoa){
    console.log(chave, pessoa[chave])
}

// for in => Lê os indices ou chaves do objeto

/* const frutas = ['pera', 'manga', 'Uva']

for(let indice in frutas){
    console.log(frutas[indice])
}
*/

// => Para cada [indice] dentro de frutas, me mostre frutas e o [indice]