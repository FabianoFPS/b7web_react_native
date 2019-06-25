function criaObjeto (nome, idade){
    return {
        nome: nome,
        idade: idade
    };
}

let pedro = criaObjeto("Pedro da Silva", 45);

console.table(pedro);

function Pessoa (nome, idade){
    this.nome = nome;
    this.idade = idade;
}

let maria =  new Pessoa("Marida da Rosa", 25);

console.table(maria);

//OU

let joana = {};
let roberta = {};

Pessoa.call(joana,"Joana Flores", 16);
Pessoa.apply(roberta, ["Roberta Silva", 38]);

console.table(joana);
console.table(roberta);
