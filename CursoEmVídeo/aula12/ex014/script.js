function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var agora = new Date()
    var hora = agora.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`

    if(hora >= 0 && hora < 6) {
        imagem.src = 'imagens/demadrugada1.png'
        document.body.style.background = '#2A3A47'
    } else if(hora >= 6 && hora < 12) {
        imagem.src = 'imagens/dedia2.png'
        document.body.style.background = '#5BC3EB'
    } else if(hora >= 12 && hora < 18) {
        imagem.src = 'imagens/detarde3.png'
        document.body.style.background = '#EBB45B'
    } else if(hora >= 18 && hora < 24) {
        imagem.src = 'imagens/denoite4.png'
        document.body.style.background = '#00123A'
    }
}