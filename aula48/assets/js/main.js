const inputTarefa = document.querySelector(".input-tarefa");
const btnTarefa = document.querySelector(".btn-tarefa");
const tarefas = document.querySelector(".tarefas");

function criaLi() {
  const li = document.createElement("li");
  return li;
}

inputTarefa.addEventListener("keypress", (e) => {
  if (e.keyCode === 13) {
    if (!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);
  }
});

function LimpaInput() {
  inputTarefa.value = "";
  inputTarefa.focus();
}

function criaBotaoApagar(li) {
  li.innerHTML += " ";
  const botaoApagar = document.createElement("button");
  botaoApagar.innerHTML = "Apagar";
  li.appendChild(botaoApagar);
  botaoApagar.setAttribute("class", "apagar");
}

function criaTarefa(textoInput) {
  const li = criaLi();
  li.innerHTML = textoInput;
  tarefas.appendChild(li);
  LimpaInput();
  criaBotaoApagar(li);
  salvarTarefas();
}

btnTarefa.addEventListener("click", () => {
  if (!inputTarefa.value) return;
  criaTarefa(inputTarefa.value);
});

document.addEventListener("click", (e) => {
  const el = e.target;
  if (el.ClassList.contains("apagar")) {
    el.elementParent.remove();
    salvarTarefas()
  }
});

function salvarTarefas() {
  const liTarefas = tarefas.querySelectorAll("li");
  const listaDtarefas = [];

  for (let tarefa of liTarefas) {
    const tarefaTexto = tarefa.innerHTML;
    tarefaTexto = tarefaTexto.replace('apagar', '').trim()
    listaDtarefas.push(tarefaTexto)
  }

  const tarefasJSON = JSON.stringify(listaDtarefas)
  localStorage.setItem('tarefas', tarefasJSON)
}

function addTarefasSalvas(){
    const tarefas = localStorage.getItem('tarefas')
    const listaDtarefas = JSON.parse(tarefas)

    for(let tarefa of listaDtarefas){
        criaTarefa(tarefa)
    }
}
addTarefasSalvas()