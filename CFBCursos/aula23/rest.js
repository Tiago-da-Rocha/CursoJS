// PARÂMETROS REST

/*
// Padrão
function soma(n1=0, n2=0) {
    return n1 + n2
}
console.log(soma(10, 5))
*/


/*
// Rest
function soma(...valores) {
    let tam = valores.length
    let res = 0
    for(let c = 0; c < tam; c++) {
        res+= valores[c]
    }
    return res
}
console.log(soma(10, 5, 2, 8, 3))
*/


// Simplificando os Códigos Rest
function soma(...valores) {
    let res = 0
    for(c of valores) {
        res+= c
    }
    return res
}
console.log(soma(10, 5, 2, 8, 3))