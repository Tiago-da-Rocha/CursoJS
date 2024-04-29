let valores = [7, 6, 3, 5, 1]
valores.sort()

for(let pos in valores) {
    console.log(`A posição [${pos}] tem o valor: ${valores[pos]}`)
}


/*
for(pos = 0; pos < valores.length; pos++) {
    console.log(`A posição [${pos}] tem o valor: ${valores[pos]}`)
}

pos = 0
while(pos < valores.length) {
    console.log(`A posição [${pos}] tem o valor: ${valores[pos]}`)
    pos++
}

console.log(pos[0])
console.log(pos[1])
console.log(pos[2])
console.log(pos[3])
console.log(pos[4])
*/