// Let tem escopo de bloco {...}
// Var só tem escopo de função

const verdadeira = true;

let nome = "luiz"; //criando
var nome2 = "luiz";

if (verdadeira) {
  let nome = "Otávio"; //criando
  var nome2 = 'Rogério'

  if (verdadeira) {
    var nome2 = "Ronaldo"; // redeclarada
    let nome = "Outra coisa";
  }
}

 console.log(nome,nome2)