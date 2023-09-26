const elementos = [
{tag: 'p', texto: 'Você já conhece a ClubPetro?'},
{tag: 'div', texto: 'Somos uma aceleradora de resultados'},
{tag: 'section', texto: 'Aditivamos os resultados do seu Posto de Combustíveis'},
{tag: 'footer', texto: 'Aumente 20% das suas vendas em 90 dias.'}
]

const container = document.querySelector('.container')
const div = document.createElement('div')

for(let i = 0; i < elementos.length; i++){
    let {tag,texto} = elementos[i];
    let tagCreate = document.createElement(tag)

    tagCreate.innerHTML = texto
    div.appendChild(tagCreate)

    /*
    Ou podemos usar dessa forma abaixo

    let textoCriado = document.createTextNode(texto);

    tagCreate.appendChild(textoCriado)
    div.appéndChild(tagCriada)
    */
}
container.appendChild(div)


/*Resumo

1. Criei uma contante usando array, que nela vai estar recebendo objetos com textos, e com suas propiedades usando :
Nisso Armazenei as informações do document em duas variaveis, sendo elas (container) e (div).

2. Após, criei um for, que irá ralizar a repetição, onde irá verificar o indicador (i), que o mesmo vai começar com o valor 0, enquanto ele for menor do que o tamanho do array (elementos), o for vai adicionar mais i++.

3. Logo defini uma desestruturação, onde criei uma variavel onde recebeu a propiedade {(tag) e (texto)}, que vai receber elementos do indicador (i) => elementos[i].

4. Nisso criei uma variavel (tagCreate) que vai receber a propiedade (tag). Essa variavel vai estar recebendo o texto => innerHTML, que ai, toda vez que (i) for menor do que elementos.length será criado mais uma tag e será adicionado um texto dentro dela.

5. Por fim, a div vai estar recebendo toda essa informação a partir do tagCreate => div.appendChild(tagCreate) que logo o container também irá recebe-la, por questão de Escopo => container.appendChild(div)

FIM

*/