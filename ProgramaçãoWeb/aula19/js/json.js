/* JSON

JSON significa JavaScript Object Notation que traduzido pro português fica algo como Notação de Objeto JavaScript.

Explicando de um modo simples JSON é basicamente uma forma de converter um objeto em texto e o contrário também, um texto em um objeto.

Ele é usado principalmente para transmitir dados entre sistemas de forma simples, já que o formato de texto é lido por praticamente toda linguagem de programação.

Para trabalhar com JSON no JavaScript usamos dois métodos:

. JSON.parse() -> Converte texto no padrão JSON em Objeto;

. JSON.stringify() -> Converte Objetos em texto padrão JSON.

*/

/*
  OBJETO CASA
const casa = {
    fundacao: "concreto",
    paredes: "tijolo",
    telhado: "amianto",
    laje: ["vigas", "tijolo diferente", "concreto fino"]
};

  CONVERSÃO DE OBJETO PARA TEXTO
let texto = JSON.stringify(casa);
document.getElementById("text").innerHTML = texto;

  CONVERSÃO DE TEXTO PARA OBJETO
let obj = JSON.parse(texto);
console.log(obj.laje[2]);
*/

/*
const ajax = new XMLHttpRequest();
ajax.open('GET', 'https://viacep.com.br/ws/01001000/json/');
ajax.send();

ajax.onload = function () {
    document.getElementById("text").innerHTML = this.responseText;

    let obj = JSON.parse(this.responseText);
    alert(obj.ddd)
};
*/

function buscarCep() {
    let cep = document.getElementById("idcep").value;

    const ajax = new XMLHttpRequest();
    ajax.open('GET', 'https://viacep.com.br/ws/' + cep + '/json/');
    ajax.send();

    ajax.onload = function () {
        let obj = JSON.parse(this.responseText);

        let logradouro = obj.logradouro;
        let bairro = obj.bairro;
        let estado = obj.uf;

        document.getElementById("text").innerHTML = "Logradouro: " + logradouro + "<br> Bairro: " + bairro + "<br> UF: " + estado;
    };
};

//logradouro": "Avenida Mergulhão", "complemento": "", "bairro": "Campo Grande", "localidade": "Rio de Janeiro", "uf": "RJ"