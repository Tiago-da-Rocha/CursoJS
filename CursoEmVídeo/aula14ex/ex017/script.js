function gerartab() {
    let nume = document.getElementById('numero')
    let n = Number(nume.value)
    let res = document.getElementById('tab')
    if(nume.value.length == 0) {
        window.alert('[ERRO]: Precisa declarar um número!')
    } else {
        tab.innerHTML = ''
        for( let c = 0; c <= 10; c++ ) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
        }
    }
}