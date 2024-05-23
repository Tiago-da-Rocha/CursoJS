/* For

Laços de repetição oferecem um jeito fácil e rápido de executar uma ação repetidas vezes. Você tem o controle de quantas vez será repetida e mostrada na tela a ação desejada. "For" é uma das formas de se ter uma estrutura de repetição em seu código.

*/

/*for(c = 1; c <= 100; c++) {
    document.getElementById("res").innerHTML += `Oi pela ${c}ª vez!... `
}*/

/*let ano = new Date().getFullYear();

for(let c = ano; c >= 1900; c--) {
    document.getElementById("ano").innerHTML += `<option value='${c}'>${c}</option>`;
}*/

const carros = ["Porsche", "Lamborghini", "Ferrari", "BMW", "Mercedes"];
var tamanho = carros.length;

for(let c = 0; c < tamanho; c++) {
    document.getElementById("res").innerHTML += `${carros[c]}... `;
}