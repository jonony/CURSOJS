/*

function criaPessoa(nome,sobrenome,idade){
    return{nome,sobrenome,idade}
}
const pessoa1 = criaPessoa('Luiz', 'Otávio', 21)
const pessoa2 = criaPessoa('Maria', 'De souza', 18)
const pessoa3 = criaPessoa('Pedro', 'Paulo', 24)
const pessoa4 = criaPessoa('Jõao', 'Victor', 45)
const pessoa5 = criaPessoa('Miguel', 'vitor', 15)

console.log(pessoa1.nome, pessoa1.sobrenome)

*/

const pessoa = {
    nome: 'Johny',
    sobrenome: 'Alaf',
    lastname: 'Carvalho',
    idade: '21',

    fala(){
        console.log(`A minha idade atual é ${this.idade}.`)
    },

    incrementaidade(){
        this.idade ++
    }
};

pessoa.fala();
pessoa.incrementaidade();
pessoa.fala()

