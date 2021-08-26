var meuformulario = document.getElementById("meuformulario");
var minhastarefas = document.getElementById("minhastarefas");
var tarefa = document.getElementById("tarefa");

var arrayDeListaDeTarefas = JSON.parse(localStorage.getItem("listadetarefas")) || [];

imprimirListaHtml();

meuformulario.addEventListener("submit", function (event) {
    event.preventDefault();

    if (tarefa.value == "") {
        alert("Preencha o nome da tarefa");
        return;
    }

    arrayDeListaDeTarefas.push(tarefa.value);

    localStorage.setItem("listadetarefas", JSON.stringify(arrayDeListaDeTarefas));

    imprimirListaHtml();

    tarefa.value = "";
});

function imprimirListaHtml() {
    minhastarefas.innerHTML = "";
    arrayDeListaDeTarefas.forEach(function(elemento, indice) {
        minhastarefas.innerHTML += novoItemNaLista(elemento, indice);
    });
    adicionarEventoBotoes();
}

function adicionarEventoBotoes() {
    document.querySelectorAll(".concluido").forEach(function(botao) {
        botao.addEventListener("click", function (event) {
            var indicedoBotao = event.target.getAttribute("data-indice");
            var texto = arrayDeListaDeTarefas[indicedoBotao]            
            arrayDeListaDeTarefas[indicedoBotao] = `${texto.replaceAll("-done", "")}`;
            localStorage.setItem("listadetarefas", JSON.stringify(arrayDeListaDeTarefas));
            imprimirListaHtml();
        });
    });

    document.querySelectorAll(".naoconcluido").forEach(function(botao) {
        botao.addEventListener("click", function (event) {
            var indicedoBotao = event.target.getAttribute("data-indice");
            var texto = arrayDeListaDeTarefas[indicedoBotao]
            arrayDeListaDeTarefas[indicedoBotao] = `${texto}-done`;
            localStorage.setItem("listadetarefas", JSON.stringify(arrayDeListaDeTarefas));
            imprimirListaHtml();
        });
    });

    document.querySelectorAll(".deletar").forEach(function(botao) {
        botao.addEventListener("click", function (event) {
            var indicedoBotao = event.target.getAttribute("data-indice");
            arrayDeListaDeTarefas.splice(indicedoBotao, 1); // alternativa
            localStorage.setItem("listadetarefas", JSON.stringify(arrayDeListaDeTarefas));
            imprimirListaHtml();
        });
    })
}

function novoItemNaLista(textoDoNovoItem, indice) {
    var nomeDaClasse = "";

    if (textoDoNovoItem.includes("-done")) {
        nomeDaClasse = "done";
    }

    return `
    <li class="${nomeDaClasse}">
        ${textoDoNovoItem.replaceAll("-done", "")} 
        <div>
            ${nomeDaClasse == "done" ? 
                `<button class="concluido" data-indice="${indice}">
                    tarefa concluida
                </button>` : 
                `<button class="naoconcluido" data-indice="${indice}">
                    tarefa não concluida
                </button>`
            }
            <button class="deletar" data-indice="${indice}">
                deletar tarefa
            </button>
        </div>
    </li>`;
}
