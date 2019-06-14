/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */

var data = new Date(); //Date sem parametros = atual
var dias_semana = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];
var messes = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

console.log("Data: "+data);

console.log("Hora: "+data.getHours());
console.log("Minutos: "+data.getMinutes());
console.log("Segundos: "+data.getSeconds());
console.log("Dia da semana: "+data.getDay()); // ZERO  = Domingo
console.log("Dia do mes: "+data.getDate());
console.log("Ano: "+data.getFullYear());
console.log("Total em milisegundos: "+data.getTime());//getTime
console.log("Data BR: "+data.getDate()+"/"+(data.getMonth()+1)+"/"+data.getFullYear());
console.log("Dia da semana por extenso: "+dias_semana[data.getDay()]);
console.log("Dia da semana por extenso BR: "+messes[data.getMonth()]);
console.log("Adicionando 10 dias: "+data.setDate(data.getDate() + 10));
console.log(data);

var data_1 = new Date(0);
console.log(data_1);

var data_2 = new Date(Date.parse("May 19, 1984"));
console.log(data_2);

