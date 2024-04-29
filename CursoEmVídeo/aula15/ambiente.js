let a = [7, 6, 3, 5]
 
a.push(4)
console.log(`O conteúdo no array é: [${a}]`)
a.sort()
console.log(`O conteúdo em ordem no array é: [${a}]`)
console.log(`A quantidade de elementos no array é: [${a.length}]`)

let pos = a.indexOf(6)

if(pos == -1) {
    console.log('[ERRO]: O valor não existe no array!')
} else {
    console.log(`A posição do valor (6) é: [${pos}])`)
}