function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var anod = window.document.getElementById('txtano')
    var res = window.document.getElementById('res')

    if(anod.value.length == 0 || Number(anod.value) > ano) {
        window.alert(`[Erro]: O Ano de Nascimento está inválido! Tente Novamente.`)
    } else {
        var sexod = document.getElementsByName('radsex')
        var idade = ano - Number(anod.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(sexod[0].checked) {
            genero = 'Homem'
            if(idade > 0 && idade <= 10) {
                //Criança
                img.setAttribute('src', 'imagens/criancam.png')
            } else if(idade > 10 && idade <= 21) {
                //Jovem
                img.setAttribute('src', 'imagens/jovemm.png')
            } else if(idade > 21 && idade <= 64) {
                //Adulto
                img.setAttribute('src', 'imagens/adulto.png')
            } else {
                //Idoso
                img.setAttribute('src', 'imagens/idoso.png')
            }
        } else {
            genero = 'Mulher'
            if(idade > 0 && idade <= 10) {
                //Criança
                img.setAttribute('src', 'imagens/criancaf.png')
            } else if(idade > 10 && idade <= 21) {
                //Jovem
                img.setAttribute('src', 'imagens/jovemf.png')
            } else if(idade > 21 && idade <= 64) {
                //Adulta
                img.setAttribute('src', 'imagens/adulta.png')
            } else {
                //Idosa
                img.setAttribute('src', 'imagens/idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos: ${genero} com ${idade} anos de idade.`
        res.appendChild(img)
    }
}