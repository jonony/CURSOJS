/*

function soma(x = 1, y = 1){

    const resultado = x + y
    return resultado
}

const resultado = soma()
console.log(resultado)

*/

/*

const raiz = function(n) {
return n ** 0.5
}

console.log(raiz(9))
console.log(raiz(18))

*/

function liquidificador (açucar, trigo, ovos, fermentos){

    let pote = ''
    pote += trigo + ovos + açucar + fermentos + ''
    
    let forno = ''

    let bolo = pote + forno

    return bolo
}

const bolo1 = liquidificador('açucar mascavo, ', 'trigo caseiro, ', 'ovos caipiras, ', 'fermento caseiro. ' )
    console.log(bolo1)

const bolo2 = liquidificador(
    'Outro trigo',
    'Outro açucar',
    '5 ovos',
    'fermento bio'
)

console.log(bolo2)