const pessoa = {
  nome: "Johny",
  sobrenome: "Alaf",
  idade: 21,
  endereço: {
    rua: "Rua Professora Isabel Eliziaro Barbosa",
    numero: 47,
  },
};

//Atribuição via desestruturação

const {nome,sobrenome,...rest } = pessoa

console.log(nome,sobrenome,rest)