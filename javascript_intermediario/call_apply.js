function getIdade (extra1, extra2){
    return this.idade + extra1+extra2;
}

let pessoa = {
    nome: "Fabiano",
    idade: 20,
    funcao: getIdade
};

console.log(getIdade(3, 1));
console.log(pessoa.funcao(3, 1));
console.log(getIdade.call(pessoa, 3, 1));
console.log(getIdade.apply(pessoa,[3, 1]));
