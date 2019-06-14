const info = {
    nome: "Fabiano",
    sobrenome: "Stoffel",
    idade: "35",
    pais: "Brasil"
};//objeto
console.log(info);
console.log(info.nome);
console.log(info.sobrenome);
console.log(info.idade);
console.log(info.pais);

let {nome} = info;
console.log(nome);

let {sobrenome, idade} = info;
console.log(`${sobrenome}, ${idade}`);

let {pais:country} = info;

console.log(country);

const nomes = ["Silva", "Fulano", "Siclano"]; //array
let {2:nomeDaVeriavel} = nomes;
console.log(nomeDaVeriavel);

let [variavel1, variavel2, variavel3] = nomes;
console.log(variavel1);
console.log(variavel2);
console.log(variavel3);

const matematica = {
    somar:function(x,y) {return x+y;},
    multiplicar:function(x,y){return x*y;}
}

var resultado1 = matematica.somar(4, 6);
console.log(resultado1);

let resultado2 = matematica.multiplicar(3, 5);
console.log(resultado2);

var {somar, multiplicar} = matematica;

let resultado3 = somar(20, 15);
console.log(resultado3);

var resultado4 = multiplicar(2, 10);
console.log(resultado4);

let {somar:adicionar} = matematica;

let resultado5 = adicionar(50, 5);
console.log(resultado5);