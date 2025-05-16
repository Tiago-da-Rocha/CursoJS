// THIS

function aluno(nome, nota) {
    this.nome = nome
    this.nota = nota

    // Normal Function
    this.dados_anonimo = function () {
        setTimeout(function () {
            console.log(this.nome)
            console.log(this.nota)
        })
    }
    
    // Arrow Function
    this.dados_arrow = function () {
        setTimeout(()=>{
            console.log(this.nome)
            console.log(this.nota)
        })
    }
}

const al1 = new aluno("Tiago", 10)
al1.dados_anonimo()
al1.dados_arrow()