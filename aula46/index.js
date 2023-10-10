function mostraHora(){
    let data = new Date()

    return data.toLocaleTimeString('pt-BR',{
        hour12: false
    })
}

const Timer = setInterval(() => {
    console.log(mostraHora())
}, 1000);

const TimeStop = setTimeout(() => {
    clearInterval(Timer)
}, 5000);

