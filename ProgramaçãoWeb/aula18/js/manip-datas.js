/* Manipular Datas Em JavaScript */

// Comando Básico Para Pegar A Data
let data = new Date();
console.log(data);


//Para Pegar O Ano Atual
let ano = data.getFullYear();
console.log(`Estamos no ano de ${ano}.`);


//Para Pegar O Mês Atual
let mes = data.getMonth();
let mesString = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
console.log(`Estamos no mês de ${mesString[mes]}.`);


//Para Pegar O Dia No Mês
let diaHoje = data.getDate();
console.log(`Hoje é dia ${diaHoje}`);


//Para O Dia Na Semana
let diaSemana = data.getDay();
let diaSemanaString = ["Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado"];
console.log(`Hoje, o dia da semana é ${diaSemanaString[diaSemana]}.`);


//Para Pega A Hora
let hora = data.getHours();
console.log(`Agora são ${hora} horas.`);


//Para Pega Os Minutos
let minutos = data.getMinutes();
console.log(`Os minutos exatos agora são ${minutos}.`);


//Para Pega Os Segundos
let segundos = data.getSeconds();
console.log(`Os segundos exatos agora são ${segundos}.`);


//Para Pega Os Millisegundos - de 0 até 999
let millisegundos = data.getMilliseconds();
console.log(`Os millisegundos exatos agora são ${millisegundos}.`);


//Para Pegar A Data No Padrão Brasileiro
let dataBR = data.toLocaleDateString('pt-BR');
console.log(`A data completa de hoje no modelo brasileiro é ${dataBR}.`);
//ou let dataBR = data.toLocaleDateString('pt-BR', {dateStyle: 'short'});


//Para Pega A Hora No Padrão Brasileiro
let horaBR = data.toLocaleTimeString();
console.log(`A hora completa de agora no modelo brasileiro é ${horaBR}.`);
//ou let dataBR = data.toLocaleDateString('pt-BR', {timeStyle: 'short'});


//Pegar Os Valores Separados
var g = new Date();
let diaMesg = g.getDate();
let mesg = g.getMonth() + 1;
let anog = g.getFullYear();

function addZero(x) {
    return x < 10 ? '0' + x : '' + x;
};

let dataPadraoBR = "Data: " + addZero(diaMesg) + "/" + addZero(mesg) + "/" + anog + ".";
console.log(dataPadraoBR);


//Comparar Datas - Maior Ou Menor. Ex: Vencimentos
var hoje = new Date();
var vencimento = new Date(2024, 4, 1);

if(hoje > vencimento) {
    console.log("Pague a conta!");
} else {
    console.log("Você está em dia!");
};


//Diferença Entre Duas Datas Em Dias
var dataInicial = new Date();
var dataFinal = new Date(2024, 11, 24);

var diferancaTempo = dataFinal.getTime() - dataInicial.getTime();
var diferencaDias = Math.ceil(diferancaTempo / (24 * 60 * 60 * 1000));
console.log(`Hoje dia ${dataInicial} até ${dataFinal} são ${diferencaDias} dias.`);