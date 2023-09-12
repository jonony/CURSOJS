 /* Primitivos (Imutaveis) - String, number, boolean, undefined, null, (bigint, symbol) - valor
    Referência (mutável) - Array, Object, fucntion
*/
 
 /*
 
 let a = 'A'
 let b = a  //cópia

 console.log(a,b)

 a = 'Outra coisa'
 console.log(a,b)

 */


 /*
 
 let a = [1,2,3]
 let b = a 
 let c = b 
 console.log(a,b)

 a.push(4)

 console.log(a, b)

 b.pop()
 console.log(a,b)

 a.push('luiz')
 console.log(c)

 */

 const a = {
    nome: 'Luiz',
    sobrenome: 'Otávio'
 }

 const b = {...a}

 a.nome = 'Lucas'

console.log(a,b)
 