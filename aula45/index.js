/*

try{//Executada quando não há erros
}catch(e){//Executada quando há erros
}finally{//Sempre 
}

*/

function returnHour(date){
    if(date && !(date instanceof Date)){
        throw new TypeError('Esperando instância de uma data')
    }
    
    if(!date){
     date = new Date()   
    }
    return date.toLocaleTimeString('pt-BR',{
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
    })
}

try{
    const data = new Date('01-01-1970 12:58:12')
    const hora = returnHour()
    console.log(hora) 
}catch(e){
    
}finally{
    console.log('Tenha um bom dia')
}
