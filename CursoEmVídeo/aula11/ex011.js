var idade = '34'
console.log('Você tem', idade, 'anos. Então...')
if(idade < 16) {
    console.log('Não é possível votar!')
} else if(idade < 18 || idade > 65) {
    console.log('Votar é opcional!')
} else {
    console.log('Votar é obrigatório!')
} 