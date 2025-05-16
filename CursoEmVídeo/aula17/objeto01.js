let amigo = {nome: 'Tiago', sexo: 'M', peso: 75, engordar(p=0){
    console.log(`${this.nome} Engordou...`)
    this.peso += p
}}

amigo.engordar(5)
console.log(`Agora ${amigo.nome} pesa: ${amigo.peso}kg.`)