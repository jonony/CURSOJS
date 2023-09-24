const form = document.getElementById("formulario");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const inputPeso = e.target.querySelector("#peso");
  const inputAltura = e.target.querySelector("#altura");

  const peso = Number(inputPeso.value);
  const altura = Number(inputAltura.value);

  if (!peso) {
    SetResultado = ("Peso Inválido", false);
    return;
  }

  if (!altura) {
    SetResultado = ("Altura Inválida", false);
    return;
  }

  const imc = getImc(peso, altura);
  const nivelImc = getNivelImc(imc)

  const msg = `O seu IMC é igual a ${imc} (${nivelImc}).`;

  SetResultado(msg,true)
});

function getNivelImc(imc){
  const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3']

  if(imc >= 39.9) return nivel[5]
  if(imc >= 34.9) return nivel[4] 
  if(imc >= 29.9) return nivel[3]
  if(imc >= 24.9) return nivel[2]
  if(imc >= 18.5) return nivel[1]  
  if(imc < 18.5)  return nivel[0]
}


function getImc(peso, altura) {
  const imc = peso / altura ** 2;
  return imc.toFixed(2);

}

function criaP() {
  const p = document.createElement("p");
  return p;
}

function SetResultado(msg, isValid) {
  const resultado = document.querySelector("#resultado");
  resultado.innerHTML = ''

  const p = criaP();

  if(isValid){
    p.classList.add('paragrafo-resultado')
  }else{
    p.classList.add('bad')
  }

  p.innerHTML = msg;
  resultado.appendChild(p);
}