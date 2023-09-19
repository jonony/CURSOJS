function zero(num){
    return num >= 10 ? num : `0${num}`
}

function formataDt(data){
    const dia = zero(data.getDate())
    const mes = zero(data.getMonth() + 1)
    const ano = zero(data.getFullYear())
    const hora = zero(data.getHours())
    const min = zero(data.getMinutes())
    const sec = zero(data.getSeconds())

    return `${dia}/${mes}/${ano} - ${hora}/${min}/${sec}`
}

const data = new Date()
const DataBR = formataDt(data)

console.log(DataBR)