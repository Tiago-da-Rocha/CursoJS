/*
let n1 = [10, 20, 30]
let n2 = [11, 22, 33, 44, 55]
let n3 = [...n1, ...n2]  // Ou [n1, n2]

console.log(`n3: ${n3}`)
console.log(`O tipo do n3: ${typeof(n3)}.`)
*/
/*
const jogador1 = {nome:"Tiago", energia:10, vidas:3, magia:5}
const jogador2 = {nome:"Matheus", energia:15, vidas:4, velocidade:10}
const jogador3 = {...jogador1, ...jogador2}

console.log(jogador3)
*/
/*
const soma = (v1, v2, v3) => {
    return v1+v2+v3
}

let valores = [2, 9, 4, 10, 5]

console.log(soma(...valores))
*/

let objs1 = document.getElementsByTagName("div")
let objs2 = [...document.getElementsByTagName("div")]

objs2.forEach(element => {
    element.innerHTML = "Curso JavaScript"
})

console.log(objs1)
console.log(objs2)