const h1 = document.querySelector('.container h1')
const data = new Date()

function getdaysemtext(diaSemana) {
    let diaSemanaText;
  
    switch (diaSemana) {
      case 0:
        diaSemanaText = "Domingo";
        return diaSemanaText;
  
      case 1:
        diaSemanaText = "Segunda-feira";
        return diaSemanaText;
  
      case 2:
        diaSemanaText = "Terça-feira";
        return diaSemanaText;
  
      case 3:
        diaSemanaText = "Quarta-feira";
        return diaSemanaText;
  
      case 4:
        diaSemanaText = "Quinta-feira";
        return diaSemanaText;
  
      case 5:
        diaSemanaText = "Sexta-feira";
        return diaSemanaText;
  
      case 6:
        diaSemanaText = "Sábado";
        return diaSemanaText;
  
      default:
        diaSemanaText = "";
    }
  }

  function getNomeMes(numeroMes) {
    let nomeMes;
  
    switch (numeroMes) {
      case 0:
        nomeMes = "Janeiro";
        return nomeMes;
  
      case 1:
        nomeMes = "Fevereiro";
        return nomeMes;
  
      case 2:
        nomeMes = "Março";
        return nomeMes;
  
      case 3:
        nomeMes = "Abril";
        return nomeMes;
  
      case 4:
        nomeMes = "Maio";
        return nomeMes;
  
      case 5:
        nomeMes = "Junho";
        return nomeMes;
  
      case 6:
        nomeMes = "Julho";
        return nomeMes;
  
      case 7:
        nomeMes = "Agosto";
        return nomeMes;
  
      case 8:
        nomeMes = "Setembro";
        return nomeMes;
  
      case 9:
        nomeMes = "Outubro";
        return nomeMes;
  
      case 10:
        nomeMes = "Novembro";
        return nomeMes;
  
      case 11:
        nomeMes = "Dezembro";
        return nomeMes;
    }
  }

 function criaDate(data){
    const diaSemana = data.getDay()
    const NumeroMes = data.getMonth()

    const nomeDia = getdaysemtext(diaSemana)
    const NomeMes = getNomeMes(NumeroMes)

    return (
        `${nomeDia}, ${data.getDate()} de ${NomeMes}` +
        ` de ${data.getFullYear()} ${zero(data.getHours())}:${zero(data.getMinutes())}:${zero(data.getSeconds())}` 
    )
 }

 function zero(num){
    return num >= 10 ? num : `0${num}`
}

 h1.innerHTML = criaDate(data)