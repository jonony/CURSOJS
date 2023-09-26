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