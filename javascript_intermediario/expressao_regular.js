/* 
Duas formas de criar espressões regulares
*/

let expressaoRegular1 = /<expressãoregular>/;
let expressaoRegular2 = new RegExp("<expressãoregular>");

let telefone = "9999-9999";
let expressaoRegularTelefone = /9999-9999/;

console.log( expressaoRegularTelefone.exec(telefone) );
console.log( expressaoRegularTelefone.exec(telefone).toString() );
console.log( 'exec: '+expressaoRegularTelefone.exec(telefone) );
console.log( 'test: '+expressaoRegularTelefone.test(telefone) );

let telefone2 = "(51) 9999-9999";
let expressaoRegularTelefone2 = /\(51\) 9999-9999/;/* \ escape */

console.log( expressaoRegularTelefone2.test(telefone2) );

let telefone2texto = "Ligar para (51) 9999-9999, tratar com João";
console.log( expressaoRegularTelefone2.test(telefone2texto) );
console.log( expressaoRegularTelefone2.exec(telefone2texto) );

let expressaoRegularTelefone3 = /^\(51\) 9999-9999$/;/* ^ começa com, $ termina com */
console.log( expressaoRegularTelefone3.test(telefone2texto) );
console.log( expressaoRegularTelefone3.exec(telefone2texto) );

console.log( expressaoRegularTelefone3.test(telefone2) );

let expressaoRegularTelefone4 = /^\([0-9][0-9]\) [0-9][0-9][0-9][0-9]-[0-9][0-9][0-9][0-9]$/;/*[^] nega */
let telefone4 = '(55) 1236-7896';
console.log( expressaoRegularTelefone4.test(telefone4) );

/*
{n} exato
{n,} no mínimo
{n, N} mínimo, máximo
*/

let expressaoRegularTelefone5 = /^\([0-9]{2}\) [0-9]{4,5}-[0-9]{4,4}$/;/*[^] nega */
console.log( expressaoRegularTelefone5.test(telefone4) );

let telefone5 = '(55) 91236-7896';
console.log( expressaoRegularTelefone5.test(telefone5) );

/*
? zero ou um
* zero ou mais
+ um ou mais
*/

let expressaoRegularTelefone6 = /^\([0-9]{2}\) [0-9]{4,5}-?[0-9]{4,4}$/;
console.log( expressaoRegularTelefone6.test(telefone5) );

let telefone6 = '(55) 912367896';
console.log( expressaoRegularTelefone6.test(telefone6) );

let expressaoRegularTelefone7 = /\([0-9]{2}\) [0-9]{4,5}-?[0-9]{4,4}/;
let telefone7 = '<table><tr><td>(51) 4789-1236</td><td>(55) 98745-3214</td><td>(48) 75667412</td></tr></table>'
console.log( expressaoRegularTelefone7.test(telefone7) );
console.log( expressaoRegularTelefone7.exec(telefone7) );

let expressaoRegularTelefone8 = /<table><tr>(<td>\([0-9]{2}\) [0-9]{4,5}-?[0-9]{4,4}<\/td>)+<\/tr><\/table>/;
console.log( expressaoRegularTelefone8.test(telefone7) );
console.log( expressaoRegularTelefone8.exec(telefone7) );

/*
\d zero a nove
\s espaço em branco
*/

let expressaoRegularTelefone9 = /<table><tr>(<td>\(\d{2}\)\s\d{4,5}-?\d{4,4}<\/td>)+<\/tr><\/table>/;
console.log( expressaoRegularTelefone9.test(telefone7) );
console.log( expressaoRegularTelefone9.exec(telefone7) );

let expressaoRegularTelefone10 = /\(\d{2}\)\s\d{4,5}-?\d{4}/g;
console.log(telefone7.match(expressaoRegularTelefone10));

/*
i Case-insensitive matching
g Global Matching
m Multiline matching
*/

let somentePrefixo = /\(\d{2}\)/g;
let semPrefixo = /\d{4,5}-?\d{4}/g;

console.log(telefone7.match(somentePrefixo));
console.log(telefone7.match(semPrefixo));

console.log(telefone7.replace(expressaoRegularTelefone10, 'telefone'));

