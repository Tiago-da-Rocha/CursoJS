let caixa1 = document.querySelector("#caixa1")
let caixa2 = document.querySelector("#caixa2")
let btn = document.getElementById("btn_transferir")
let todosCursos = [...document.querySelectorAll(".curso")]

todosCursos.map((elemento)=>{
    elemento.addEventListener("click", (evt)=>{
        let curso = evt.target
        curso.classList.toggle("selecionado")
    })
})

btn.addEventListener("click", ()=>{
    let cursosSelecionados = [...document.querySelectorAll(".selecionado")]
    let cursosNaoSelecionados = [...document.querySelectorAll(".curso:not(.selecionado)")]

    cursosSelecionados.map((elemento)=>{
        caixa2.appendChild(elemento)
    })

    cursosNaoSelecionados.map((elemento)=>{
        caixa1.appendChild(elemento)
    })
})