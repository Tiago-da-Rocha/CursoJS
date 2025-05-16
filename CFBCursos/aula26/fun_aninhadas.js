// FUNÇÕES ANINHADAS


const soma = (...valores)=>{
    // Função principal - irá receber os valores de fora.
    const somar = val=>{
        // Função secundária - irá receber o valores da função principal e trabalhará em cima deles.
        let res = 0
        for(c of val) {
            res += c
        }
        return res // Retorno do cálculo dos valores enviados pela função principal.
    }
    return somar(valores) // Retorno do cálculo dos valores enviados para a função secundária. Chamada do retorno acima.
}
console.log(soma(10, 11, 12, 13, 14, 15))