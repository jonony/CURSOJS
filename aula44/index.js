// try{
// console.log(naotem)
// }catch(err){
//    console.log('não existo')
// }

function soma(x,y){
    if(typeof x !== 'number' || typeof y !== 'number'){
    throw new Error('x e y precisam ser numeros.')}

    return x + y
}

try{
console.log(soma(2,5))
console.log(soma('2',2))
}catch(error){
    console.log(error)
}

// O try{} irá tentar executar o que será definido, conforme a linha 15 e 16, caso ocorra qualquer erro dentro do bloco será preciso que caia no catch{(error)}

//Dentro do bloco catch será o que irá ser executado para o cliente