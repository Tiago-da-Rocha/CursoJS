let num = [10, 20, 30, 40, 50]

/*
// PERCORRER A POSIÇÃO DOS ELEMENTOS
console.log("Padrão.")
for(let i = 0; i < num.length; i++) {
    console.log(i)
}
// OU
console.log("FOR IN.")
for(i in num) {
    console.log(i)
}


// PERCORRER O CONTEÚDO DOS ELEMENTOS
console.log("Padrão.")
for(let i = 0; i < num.length; i++) {
    console.log(num[i])
}
// OU
console.log("FOR IN.")
for(i in num) {
    console.log(num[i])
}
// OU
console.log("FOR OF.")
for(i of num) {
    console.log(i)
}
*/

const objs = document.getElementsByTagName("div")

// FOR IN
for(o in objs) {
    // console.log(objs[o].style.background = "gray")
}

// FOR OF
for(o of objs) {
    console.log(o.innerHTML = "Oi!")
}