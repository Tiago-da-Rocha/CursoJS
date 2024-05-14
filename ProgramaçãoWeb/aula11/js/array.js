/*Arrays

Os arrays JavaScript são usados para armazenar vários valores em uma única variável. Diferente dos objetos, que funcionam com propriedades ou "nomes" que você dá para os itens dentro dele, os arrays não possuem propriedades. O item dentro dele é encontrado pela posição.

Imagine um array como uma lista de itens, com controle, por ordem de posição dentro dele.

Ex: const lista = ["arroz", "feijão", "macarrão", "leite"];

A lista[0] (lista na posição 0) vai conter o valor "arroz".
A lista[1] (lista na posição 1) vai conter o valor "feijão".

E assim por diante.

*/

/*

    Diferença entre Array e Objeto

const pessoa = {nome: "Tiago", sobrenome: "Rocha", idade: 20}; OBJETO
const pessoa = ["Tiago", "Rocha", 20]; ARRAY

pessoa.nome;
pessoa[0];

*/


/*
var item1 = "arroz";    //Posição 0
var item2 = "feijão";   //Posição 1
var item3 = "macarrão"; //Posição 2
var item4 = "leite";    //Posição 3
*/

/*
const lista = ["arroz", "feijão", "macarrão", "leite"];
*/

const lista = [
    "arroz",
    "feijão",
    "macarrão",
    "leite"
];

console.log(lista);

const pessoa = ["Tiago", "da Rocha", 20];

/*alert(`O total de itens dentro da variável é ${pessoa.length}, são eles: [${pessoa}]`)*/

/*pessoa.push("homem");
alert(pessoa[pessoa.length - 2]);*/

var x = 20;
alert(Array.isArray(x));

