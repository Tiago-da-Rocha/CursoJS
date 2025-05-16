// ARROW FUNCTIONS


/*
// Function Padrão
function somando(v1, v2) {
    return v1+v2
}
console.log(somando(25, 52))
*/


/*
// Função Anônima
const soma = function(v1, v2){return v1+v2}
console.log(soma(10, 2))
*/


// Arrow Function
const soma = (v1, v2)=>{return v1+v2}
console.log(soma(10, 2))


// Arrow Function Mais Simplificada
const nome = n=>{return n}
console.log(nome("Tiago"))

// OU

// Arrow Function Mais Simplificada
const add = n1=>n1+10
console.log(add(10))