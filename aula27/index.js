// Operação Ternária    ? :

// (Condição)  ?  'Valor para Verdadeiro'  :  'Valor para falso';

// A sua Pontuação é maior ou igual a 1000   ?  Se sim (Usuário Vip) : Se não (Usuário Normal);

const pontuacaoUser = 999;
const nivelUser = pontuacaoUser >= 1000 ? "Usuário VIP" : "Usuário Normal";

const corUsuario = null
const corPadrao = corUsuario || 'green'

console.log(nivelUser, corPadrao);
