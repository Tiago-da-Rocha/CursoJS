// addEventListener


// const c1 = document.querySelector("#c1")


/*
const msg = ()=>{
    alert("Hello, World!")
}
//c1.addEventListener("click", msg)


// OU direto na adição do envento
c1.addEventListener("click", ()=>{
    alert("Clicou!")
})


// OU Chamando uma função
c1.addEventListener("click", ()=>{
    msg()
})
*/



// Se Aprofundando Mais



const cursos = [...document.querySelectorAll(".caixa")]

cursos.map((elemento)=>{
    elemento.addEventListener("click", (evt)=>{
        const elemento = evt.target
        elemento.classList.add("destaque")
        console.log("O elemento '"+ elemento.id + "' e curso '" + elemento.innerHTML + "' foi clicado!")
    })
})


/*
c1.addEventListener("click", (evt)=>{
    const elemento = evt.target
    elemento.classList.add("destaque")
})
*/