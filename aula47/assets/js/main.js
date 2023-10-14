
function getTimeFromSeconds (sec){
    const data = new Date(sec*1000)
    return data.toLocaleTimeString('pt-BR',{
        hour12: false,
        timeZone: 'GMT'
    })
}

let segundos = 0
let Timer

function goTime(){
     Timer = setInterval(()=>{
        segundos ++
        relogio.innerHTML = getTimeFromSeconds(segundos)
    },1000)
}

document.addEventListener('click', (e)=>{

    const el = e.target
    if(el.classList.contains('zerar')){
        
        clearInterval(Timer)
        relogio.innerHTML = '00:00:00'
        relogio.classList.remove('pausado')
        segundos = 0
    }

    if(el.classList.contains('iniciar')){
        
        relogio.classList.remove('pausado')
        clearInterval(Timer)
        goTime()
    }

    if(el.classList.contains('pausar')){
        
        clearInterval(Timer)
        relogio.classList.add('pausado') 
    }
})

