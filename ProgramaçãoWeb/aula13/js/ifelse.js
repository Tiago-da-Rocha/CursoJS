/* If e Else

São as chamadas estruturas condicionais, simples ou composta, depende de quantas condições vão existir no código.

É usado quando queremos dar condições ao código, quando o retorno é mais de um.

O usuário deixa de se limitar, pois haverá mais de uma opcão na interação.

*/

/* var interruptor = "off";

if (interruptor == "off") {
    alert("A lâmpada esta desligada!");
    window.document.body.style.backgroundColor = 'black';
    window.document.body.style.color = 'white';
} else {
    alert("A lâmpada está ligada");
    window.document.body.style.backgroundColor = 'white'; 
}*/


let hora = new Date().getHours();
let saida = document.getElementById("saida");

if (hora < 12) {
    alert("Bom Dia!");
    window.document.body.style.backgroundColor = 'aqua';
} else if(hora < 18) {
    alert("Boa Tarde!");
    window.document.body.style.backgroundColor = 'rgb(255, 102, 47)';
} else if(hora < 24) {
    alert("Boa Noite!");
    window.document.body.style.backgroundColor = 'darkblue';
    window.document.body.style.color = 'white'
} else {
    alert("Hora Inexistente!");
}

function clicar() {
    let text = document.getElementById("text").value;
    let result = document.getElementById("vermelho");
    if (text == "" || text == null) {
        alert("[ERRO]: O campo do relatório não pode estar vazio.");
        result.innerHTML = "[ERRO]: Digite algo!";
        result.style.color = 'red'
    } else {
        result.innerHTML = "Tudo Ok!";
        result.style.color = 'rgb(0, 217, 0)'
    }
}