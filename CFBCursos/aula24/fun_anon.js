// FUNÇÕES ANÔNIMAS

/*
// Normal
function soma(v1, v2) {
    return v1 + v2
}
console.log(soma(10, 15))
*/


// Funcão Anônima
let f1 = function (v1, v2) {
    return v1 + v2
}
console.log(f1(10, 20));


// Constructor em Função Anônima
let f2 = new Function("v1", "v2", "return v1 + v2")
console.log(f2(25, 30))