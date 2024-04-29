let escn = document.getElementById('numero')
let quad = document.getElementById('quadros')
let res = document.getElementById('res')
let valores = []
let soma = 0
let maior = 0
let menor = 101

function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if(l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if(isNumero(escn.value) && !inLista(escn.value, valores)) {
        valores.push(Number(escn.value))
        let item = document.createElement('option')
        item.text = `Valor ${escn.value} adicionado.`
        quad.appendChild(item)
        res.innerHTML = ''
        soma += Number(escn.value)
        if(Number(escn.value) > maior) {
            maior = Number(escn.value)
        }
        if(Number(escn.value) < menor) {
            menor = Number(escn.value)
        }
    } else {
        window.alert('[Erro]: Valor inválido ou já adicionado. Digíte um número (entre 1-100)!')
    }
    escn.value = ''
    escn.focus()
}

function finalizar() {
    /* Eu: */
    if(valores.length == 0) {
        window.alert('[ERRO]: É necessário informar um número para poder finalizar!')
    } else {
        valores.sort()
        res.innerHTML = `Ao todo temos ${valores.length}    números cadastrados.<br>`
        res.innerHTML += `O maior valor informado foi ${maior}.<br>`
        res.innerHTML += `O menor valor informado foi ${menor}.<br>`
        res.innerHTML += `Somando todos os valores, temos ${soma}.<br>`
        res.innerHTML += `A média dos valores digitados é ${soma/valores.length}`
    }
    /* Professor:

    if(valores.length == 0) {
        window.alert('Adicione valores antes de finalizar!')
    } else {
        let tot = valores.length
        let maior = valore[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for(let pos in valores) {
            soma += valores[pos]
            if(valores[pos] > maior) {
                maior = valores[pos]
            } 
            if(valores[pos] < menor) {
                menor = valores[pos]
            }
        media = soma / tot
        res.innerHTML = `Ao todo, temos ${tot}    números cadastrados.<br>`
        res.innerHTML += `O maior valor informado foi ${maior}.<br>`
        res.innerHTML += `O menor valor informado foi ${menor}.<br>`
        res.innerHTML += `Somando todos os valores, temos ${soma}.<br>`
        res.innerHTML += `A média dos valores digitados é ${media}`    
    }    

    */
}




/*
`Ao todo temos ${valores.length} números cadastrados.`

`O maior valor informado foi ${valores.indexOf(valores.length)}.`

`O menor valor informado foi ${menor}.`

`Somando todos os valores, temos ${soma}.`

`A média dos valores digitados é ${soma/valores.length}`
*/