// MAP


/*
const cursos = ["HTML", "CSS", "JS", "PHP", "React"]
cursos.map((el, i)=>{
    console.log(`. O curso de ${el} está na ${i}º posição.`)
})
*/

/*
const cursos = ["HTML", "CSS", "JS", "PHP", "React"]
let c = cursos.map((el, i)=>{
    console.log(`. O curso de ${el} está na ${i}º posição.`)
})
*/

/*
const cursos = ["HTML", "CSS", "JS", "PHP", "React"]
let c = cursos.map((el, i)=>{
    return el
})
console.log(c)
*/

/*
const cursos = ["HTML", "CSS", "JS", "PHP", "React"]
let c = cursos.map((el, i)=>{
    return `<div>${el}</div>`
})
console.log(c)
*/

/*
let elementos = document.getElementsByTagName("div")
elementos = [...elementos]
elementos.map((el, i)=>{
    el.innerText = "JavaScript"
})
*/

/*
const elementos = document.getElementsByTagName("div")
const val = Array.prototype.map.call(elementos, ({innerHTML})=>innerHTML)
console.log(val)
*/


const converterInt = (e)=>parseInt(e)
const dobrar = (e)=>e*2
let num = ["1", "2", "3", "4", "5"].map(dobrar)
console.log(num)