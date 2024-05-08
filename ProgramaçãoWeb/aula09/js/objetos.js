/*OBJETOS
    
Objetos são basicamente variáveis com muitos valores dentro.
    
Ex: const carro = {marca: "Ford", modelo: "Ka", ano: 2015}
        
Os valores dentro de um objeto são chamdos de propriedades.
    
Objetos também podem ter métodos. Um método é uma função colocada dentro de uma propriedade.

*/


/* Quando determinamos as propriedades de um objeto, ele acaba se tornando um objeto literal.(Existem objetos não literais, podem ser gerados de forma dinâmica.) */
const carro = {
    marca: "Ford",
    modelo: "Ka",
    ano: 2015,
    placa: "ABC-1234",
    /* Exemplo de método: */
    buzina: function() {
        return window.alert("BIiIiIiIiIiIiIiI")
    },
    completo: function() {
        return "A marca é " + this.marca + " e o modelo é " + this.modelo + "."
    }    
};

window.alert(carro.completo())

var obj = document.getElementById("objeto");

obj.innerHTML = `A marca do carro é ${carro.marca}(${carro.modelo}) do ano de ${carro.ano}. A placa do carro é: ${carro.placa}. Clique no botão abaixo para acionar a buzina!)`;
