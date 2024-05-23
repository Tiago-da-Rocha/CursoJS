/* Switch

É usado para realizar diferentes ações com base em diferentes condições no mesmo bloco de verificação. Caso a condição não seja compatível, não será executada e o valor padrão será acionado.

A estrutura switch trabalha com valores(variáveis) que sejam idênticos ás condições exigidas. ex: expressão === case.

Estrutura e Esqueleto:

switch (expressão){
    case a:
        //o que acontece
        break;
    case b:
        //o que acontece
        break;
    case c:
        //o que acontece
        break;
    case d:
        //o que acontece
        break;
    case e:
        //o que acontece
        break;
    default:        
}

*/

function diahoje() {
    var dh = new Date().getDay();

    switch (dh) {
        case 0:
            window.alert("Hoje é Domingo!")
            break;
        case 1:
            window.alert("Hoje é Segunda-Feira!")
            break;
        case 2:
            window.alert("Hoje é Terça-Feira!")
            break;
        case 3:
            window.alert("Hoje é Quarta-Feira!")
            break;
        case 4:
            window.alert("Hoje é Quinta-Feira!")
            break;
        case 5:
            window.alert("Hoje é Sexta-Feira!")
            break;
        case 6:
            window.alert("Hoje é Sábado!")
            break;
        default:

    }
}


function verificador() {
let cor = document.getElementById("test").value;
let erro = document.getElementById("erro");
cor = cor.toLowerCase();

    switch (cor){
        case "azul":
            window.document.body.style.backgroundColor = "blue";
            break;
        case "vermelho":
            window.document.body.style.backgroundColor = "red";
            break;
        case "amarelo":
            window.document.body.style.backgroundColor = "yellow";
            break;
        case "verde":
            window.document.body.style.backgroundColor = "green";
            break;
        case "marrom":
            window.document.body.style.backgroundColor = "brown";
            break;
        case "":
            alert("[ERRO]:Você precisa digitar algo!");
            erro.innerHTML = "[ERRO]:Você precisa digitar algo!";
            break;
        default:
            alert("[ERRO]:Essa cor não existe no sistema!");
            erro.innerHTML = `[ERRO]:A cor "${cor}" não existe no sistema!`;
    }
}