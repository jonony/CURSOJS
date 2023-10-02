const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let i = 0

while( i < numeros.length){

  let numero = numeros[i]

  if (numero === 2){
    continue;
  }

  if(numero === 7){
    break
  }
  console.log(numero)

  i++
}
// Se usarmos o [continue], a engine do JS pulará o número informado e continuará o laço.
// Já o [break], a primeira vez que a engine encontra-lo, não será executado mais nenhum laço.