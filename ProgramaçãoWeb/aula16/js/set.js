/* Eventos de Tempo Com JavaScript

Os eventos de tempo permitema execução do código em intervalos de tempo especificados. Esses intervalos de tempo são chamados de "Eventos de Cronometragem".

Os dois métodos-chave para usar com JavaScript são:

setTimeout(function(){}, millisegundos)
-> Executa uma função, depois de esperar um número especificado de millisegundos.

setInterval(function(){}, millisegundos)
-> E o mesmo que setTimeout(), mas repete a execução da função continuamente.

*/


/*function aContagem(){
    start.style.color = "rgb(0, 255, 0)";
    start.innerHTML = "Contagem Ativada...";

    //ATIVA A FUNÇÃO APENAS UMA VEZ QUANDO DER O TEMPO ESPECIFICADO!
    contagem = setTimeout(function(){
        var start = document.getElementById("tempo").innerHTML;
        start.innerHTML = "setTimeout Executado!";
    }, 5000); 
};*/

function aContagem(){
    document.getElementById("tempo").style.color = "rgb(0, 255, 0)";

    //ATIVA A FUNÇÃO MAIS DE UMA VEZ QUANDO DER O TEMPO ESPECIFICADO!
    contagem = setInterval(function (){
        var start = document.getElementById("tempo").innerHTML;
        var soma = parseInt(start) - 1;

        if(soma == 0) {
            document.getElementById("tempo").innerHTML = "Tempo esgotado!";
            pContagem();
        } else {
            document.getElementById("tempo").innerHTML = soma;
        }

    }, 1000);
};

function pContagem(){
    clearInterval(contagem);
    document.getElementById("tempo").style.color = "rgb(255, 0, 0)";
};