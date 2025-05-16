// FUNÇÕES GERADORAS

/*
function* colors() {
    yield "White"
    yield "Black"
    yield "Brown"
}
let itcolors = colors()
console.log(itcolors.next().value)
console.log(itcolors.next().value)
console.log(itcolors.next().value)

// Outro exemplo

function* questions() {
    const name = yield "What is your name?"
    const sport = yield "What is your favorite sport?"
    return `Hi ${name}, your favorite sport is ${sport}. Thanks.`
}
let itquestions = questions()
console.log(itquestions.next().value)
console.log(itquestions.next("Tiago").value)
console.log(itquestions.next("Calisthenics").value)
*/

// Outro exemplo

function* contador() {
    let i = 0
    while(true) {
        yield i++
        if(i > 5) {
            break
        }
    }
}

let itc = contador()

for(let c of itc) {
    console.log(c)
}