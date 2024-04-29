function contar() {
    let i = window.document.getElementById('inicio')
    let f = window.document.getElementById('fim')
    let p = window.document.getElementById('passo')
    let res = document.getElementById('res')
    if(i.value.length == 0 || f.value.length == 0 || p.value.length == 0) {
        res.innerHTML = '[ERRO]:Impossível contar!'
        window.alert('[ERRO]:Digite um número no campo vazio!')
    } else {
        let start = Number(i.value)
        let end = Number(f.value)
        let step = Number(p.value)
        res.innerHTML = 'Contando...<br>'
        if(step <= 0) {
            window.alert('Passo inválido! Considerando Passo 1')
            step = 1
        }
        if(start > end) {
            for(start = start; start >= end; start -= step) {
                res.innerHTML += `&#128073 ${start},`
            }
        } else {
            for(start = start; start <= end; start += step) {
                res.innerHTML += `&#128073 ${start},`
        }
        }
        res.innerHTML += `&#9994&#127884`
    }
}