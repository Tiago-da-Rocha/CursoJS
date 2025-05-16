/* Lista De Tarefas */

let contador = 0;
let tarefa = document.getElementById("idtarefa");
let botaoAd = document.getElementById("adicionar");
let principal = document.getElementById("container");


function adicionarTarefa() {
    let valorInput = tarefa.value;
    

    if ((valorInput !== "") && (valorInput !== null) && (valorInput !== undefined)) {
        
        ++contador;

        let novoItem = `
        <div id="${contador}" class="campo">
            <div class="campoEmoji" onclick="marcarTarefa(${contador})">
                <span class="mdi mdi-circle-outline" id="icone_${contador}">
                </span>
            </div>
            <div class="campoSaida" onclick="marcarTarefa(${contador})">
                ${valorInput}
            </div>
            <div class="campoDeletar" onclick="deletarTarefa(${contador})">
                <button id="deletar">
                    <span class="mdi mdi-delete"></span> Deletar
                </button>
            </div>
        </div>`;

        //Adicionar nova tarefa
        principal.innerHTML += novoItem;

        //Zerar o input para escrever uma nova tarefa
        tarefa.value = "";
        tarefa.focus();

    } else {
        alert("Você tem de digitar uma tarefa!");
    };
};

function marcarTarefa(id) {
    var campo = document.getElementById(id);
    var classe = campo.getAttribute("class");
    console.log(classe);
    
    if (classe == "campo") {
        campo.classList.add("clicado");

        var icone = document.getElementById("icone_" + id);
        icone.classList.remove("mdi-circle-outline");
        icone.classList.add("mdi-check-circle");

        campo.parentNode.appendChild(campo);
    } else {
        campo.classList.remove("clicado");

        var icone = document.getElementById("icone_" + id);
        icone.classList.remove("mdi-check-circle");
        icone.classList.add("mdi-circle-outline");
    }
};

function deletarTarefa(id) {
    var tarefa = document.getElementById(id);
    tarefa.remove();
};

tarefa.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        botaoAd.click();
    };
});