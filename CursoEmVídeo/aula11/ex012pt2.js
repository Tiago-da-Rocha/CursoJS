var agora = new Date()
var hora = arora.getHours()

console.log('Estranho: Olá, você pode me dizer que horas são?')
console.log(`Eu: É claro! São ${hora}.`)

if(hora >= '00:00' && hora <= '05:59') {
    console.log('Estranho: Muito obrigado, tenha uma BOA MADRUGADA!')
} else if(hora >= '06:00' && hora <= '11:59') {
    console.log('Estranho: Muito obrigado tenha um BOM DIA!')
} else if(hora >= '12:00' && hora <= '17:59') {
    console.log('Estranho: Muito obrigado tenha uma BOA TARDE')
} else if(hora >= '18:00' && hora <= '23:59') {
    console.log('Estranho: Muito obrigado tenha uma BOA NOITE!')
} else {
    console.log('Estranho: Perdão? Poderia repetir, por favor. Essa hora não existe!')
}
 