/* 

    Vamos entender Variáveis

Variáveis são "recipientes" onde podemos armazenar informações que podem variar, ou seja, podem ter qualquer tipo de valor.
    
No JavaScript temos 3 palavras-chaves para declarar variáveis, são elas:

-> var
->let
->const

*/


/*
    DECLARAÇÃO DE VARIÁVEIS
var a, b, c;

    ATRIBUIÇÃO DOS VALORES
a = 2;
b = 3;
c = a + b;

window.alert(c);
*/


/* Variáveis "var" podem ser redeclaradas conforme você pede ao decorrer do código. Não há um limite. Então deve-se atentar para qual valor você quer dentro dela. */ 
var nome, sobrenome, nomeCompleto, idade;

nome = "Tiago";
sobrenome = "da Rocha";
idade = "19"
nomeCompleto = nome + " " + sobrenome;

document.getElementById("text").innerHTML = `Seu nome é: ${nomeCompleto}, sua idade é: ${idade}`



/* Variáveis "let" não podem ser redeclaradas sem ser dentro de um bloco, então fora do bloco let tem um valor e dentro do bloco let tem outro valor. */
let pessoa = "Tiago"
//let pessoa = "Mateus"//Não pode! Vai retornar um erro.

{
    let pessoa = "Mateus"//Isso é aceitável apenas dentro de um bloco.
}

document.getElementById("text").innerHTML = pessoa;



/* Variáveis "const" são constantes, não podem ser redeclaradas em qualquer circunstância. Sempre vão ter o valor fixo. */
const dia = "noite"
//const dia = "manhã"//Não pode! Vai retornar um erro.

{
    const dia = "manhã"//Isso não é aceitável, independente de estar dentro de um bloco.
}

document.getElementById("text").innerHTML = dia;