let titulo = Number(prompt('Digite um número'))
const numero = document.getElementById('numero-titulo')
const texto = document.getElementById('texto')

numero.innerHTML = titulo
texto.innerHTML += ''
texto.innerHTML += `Raiz quadrada: ${titulo **0.5}<br>`
texto.innerHTML += ` ${titulo} é inteiro: ${Number.isInteger(titulo)} <br>`
texto.innerHTML += `É NaN ${Number.isNaN(titulo)}<br>`
texto.innerHTML += `Arredondado para baixo: ${Math.floor(titulo)} <br>`
texto.innerHTML += `Arredondado para cima: ${Math.ceil(titulo)} <br>`
texto.innerHTML += `Com duas casas decimais: ${titulo.toFixed(2)} <br>`