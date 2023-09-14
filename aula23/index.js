/*
    &&  -> false && true -> false "o valor mesmo"
    ||  -> vai retornar "o valor verdadeiro"

    FALSY
    0
    '' " " ``
    null / undefined
    NaN

*/

const a = 0
const b = null
const c = 'false' // string -> true
const d = false
const e = NaN

console.log(a || b || c || d || e)

