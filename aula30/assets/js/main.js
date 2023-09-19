const h1 = document.querySelector(".container h1");
const data = new Date();

function getdaysemtext(diaSemana) {
  const diaSemanas = [
    'Domingo',
    'Segunda',
    'Terça',
    'Quarta',
    'Quinta',
    'Sexta',
    'Sabado',
  ]
  return diaSemanas[diaSemana]
}

function getNomeMes(numeroMes) {
  const meses = [
    "janeiro",
    "fevereiro",
    "março",
    "abril",
    "maio",
    "junho",
    "julho",
    "agosto",
    "setembro",
    "outubro",
    "novembro",
    "dezembro",
  ];
  return meses[numeroMes]
}

function zero(num) {
  return num >= 10 ? num : `0${num}`;
}

function criaDate(data) {
  const diaSemana = data.getDay();
  const NumeroMes = data.getMonth();

  const nomeDia = getdaysemtext(diaSemana);
  const NomeMes = getNomeMes(NumeroMes);

  return (
    `${nomeDia}, ${data.getDate()} de ${NomeMes}` +
    ` de ${data.getFullYear()} ${zero(data.getHours())}:${zero(
      data.getMinutes()
    )}:${zero(data.getSeconds())}`
  );
}

h1.innerHTML = criaDate(data);

/*

const h1 = document.querySelector(".container h1");
const data = new Date();
h1.innerHTML = data.toLocaleDateString("pt-BR", {
  dateStyle: "full",
  timeStyle: "short",
});

*/
