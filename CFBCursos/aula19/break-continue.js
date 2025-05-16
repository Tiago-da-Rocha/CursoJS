let n = 0
let max = 100
let pares = 0

/*
// COMANDO BREAK
while(n <= max) {
    console.log(n + "º posição.")
    if(n > 30) {
        break
    }
    n++
}
*/

// COMANDO CONTINUE
for(let i = n; i <= max; i++) {
    console.log(`${i}º posição.`)
    if(i%2!=0) {
       continue 
    }
    pares++
}
console.log(`Há ${pares} valores pares.`)