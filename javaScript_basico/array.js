/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */

var lista = ["arroz", "feijão", 20, true];

alert(lista[2]);
alert(lista.length);
alert(lista.indexOf("feijão"));
alert(lista.indexOf("não exite"));

var arrayToString = lista.join("|");
alert(arrayToString);

lista.pop();/*remove o ultimo elemento do array e retorna ele*/
lista.shift();/*remove o 1º retornando ele*/
lista.push("maminha"); /*retorna a posição onde foi inserido*/

arrayToString = lista.join("|");
alert(arrayToString);
