var meuformulario = document.getElementById("meuformulario");
var minhastarefas = document.getElementById("minhastarefas");
var tarefa = document.getElementById("tarefa");


meuformulario.addEventListener("submit", function (event) {
    event.preventDefault();

    if (tarefa.value == "") {
        alert("Preencha o nome da tarefa");
        return;
    }

    var novatarefa = `<li>${tarefa.value} <button>tarefa concluida</button><button>deletar tarefa</button> </li>`;
    

    minhastarefas.innerHTML += novatarefa;

    tarefa.value = "";
});
