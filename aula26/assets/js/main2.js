const form = document.getElementById("formulario");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const inputPeso = e.target.querySelector("#peso");
  const inputAltura = e.target.querySelector("#altura");

  const peso = Number(inputPeso.value);
  const altura = Number(inputAltura.value);

  SetResultado(msg, true)
});




function criaP() {
  const p = document.createElement("p");
  return p;
}

function SetResultado(msg, isValid) {
  const resultado = document.querySelector("#resultado");
  resultado = "";

  const p = criaP();

  p.innerHTML = msg;
  resultado.appendChild(p);
}
