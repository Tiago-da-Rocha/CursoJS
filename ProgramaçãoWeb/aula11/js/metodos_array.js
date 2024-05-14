/* Métodos Array 

São funcionalidades, métodos, que podemos adicionar ao lado do arrey que nos permite gerar uma ação no navegador, como: saber quantos elementos existem no array; adicionar um elemento dentro do array em último lugar; excluir o primeiro elemento do array apenas; etc.

Alguns Métodos:

. array.length; - é para seber o comprimento do array, quantos elementos tem no array.

. array.push(elemento); - é para adicionar um elemento dentro do array na última posição.

. array.join(escolha do que quer que tenha ao lado de cada elemento ao aparecer no navegador); - é para quando quiser declarar a array e retirar a vírgula para botar outro símbolo. 

. array.pop(); - é para excluir o último elemnto no array.

. array.shift(); - é para excluir o elemento no índice 0 do array, o primeiro elemento do array.

. array.unshift(elemento); - é para reorganizar os índices no array adicionando outro elemento no índice 0, adicionar outro elemento na primeira posição sem excluir o antingo.

. array.splice(posição, escolha de deletar ou não, elemento); - é para adicionar um elemento podendo escolher em qual posição colocar e se vai deletar o anterior ou não.

. array.concat(outro array, e outro array); - é para concatena arrays dentro de uma variável.

. array.slice(de(´índice), até(índice)); - é para mostrar certos elementos dentro de um array, pelo índice, até um certo elemento, passando para uma variável.

. array.sort(); - é para fazer os elementos dentro do array aparecerem em ordem, seja alfabética ou numérica até 10.

. array.reverse(); - é para quando você quiser que os elementos em sort fiquem ao contrário.

. array.sort(function (a, b) {return a - b}); - é para quando quiser deiar os elementos numérico em ordem, isso é basicamente um hackiezinho pois o sort funciona para strings.

. function MaiorN(array) {return Math.max.apply(null, array);}; - é para pegar o maior valor dentro do array e mostrar.

. function MenorN(array) {return Math.min.apply(null, array);}; - é para pegar o menor valor dentro do array e mostrar.

. array.indexOf(elemento) - é para ver se existe um elemento específico dentro do array. Se existir, então o retorno será o índice do elemento no array, se não existir, então o retorno será o número -1.

. array.filter(function filtragem(value, index, array) {return value > valor}) - é para filtrar os valores maiores ou menores que um valor requerido. Fazendo uma variável receber apenas os valores filtrados.

*/

// Usando os Métodos:

const test = ["Tiago", "está", "aprendendo", "JavaScript."];
const n = [60, 3, 54, 23, 18, 1];

//console.log(test.length);

/* test.push("Cool!");
console.log(test); */

// console.log(test.join(" .. "));

/* test.pop();
console.log(test); */

/* test.shift();
console.log(test); */

/* test.unshift("Hello, World!");
console.log(test); */

/* test.splice(1,0, "com", "20", "anos");
console.log(test); */

/* const test1 = ["Ele", "será", "grande!"];
const bigtest = test.concat(test1);
console.log(bigtest); */

/* const melfil = ["Desafio em Tóquio", "Kung Fu Panda", "Vingadores Ultimato", "O Poderoso Chefão", "Clube da Luta", "Planeta dos Macacos", "Poder Sem Limites"];
const poscar = melfil.slice(2, 5);
console.log(poscar); */

/* test.sort();
test.reverse();
console.log(test); */

/* const ordemn = n.sort(function o_n(a, b) {
    return a - b;
});
console.log(ordemn); */

/* function maiorn(array) {
    return Math.max.apply(null, array);
}
console.log(maiorn(n)); */

/* function menorn(array) {
    return Math.min.apply(null, array);
}
console.log(menorn(n)); */

/* const esp = test.indexOf("JavaScript.");
console.log(esp); */

const maior25 = n.filter(filtragem);
function filtragem(value, index, array) {
    return value > 25;
};

console.log(maior25);