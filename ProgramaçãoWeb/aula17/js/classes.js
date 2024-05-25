/* Classes em JavaScript

Em 2015 foi introduzido no JavaScript as Classes. As Classes são um conceito antigo em programação e vária linguagens utilizam elas. Mas no JavaScript isso é relativamente novo, por isso menos programadores experientes não sabem muito bem utilizar.

Basicamente, as Classes são como "fábricas" para criar objetos.

Assim como uma fábrica da vida real precisa das máquinas para construir os objetos, as Classes no JavaScript usam um método chamado constructor() para fabricar os objetos.

*/


// Isso é um Objeto em JavaScript:
// const carro = {marca: "Fiat", modelo: "Uno", ano: 2001};

// Isso é uma Classe em JavaScript:
class Carro {
    constructor(valor1, valor2, valor3, valor4) {
        this.marca = valor1;
        this.modelo = valor2;
        this.geracao = valor3;
        this.ano = valor4;
    }
}

const civic = new Carro("Honda", "Civic", 10, 2016);
const touro = new Carro("Fiat", "Toro", "Última", 2024);

console.log(civic);
console.log(touro);

