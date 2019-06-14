let numeros = [1,2,3,4];
let mais_numeros = [...numeros,5,6,7,8,9];
console.log(mais_numeros);

let info = {
    nome: 'fabiano',
    sobrenome: 'stoffel',
    idade: 40
};

let novainfo = {
    ...info,
    cidade: "NH",
    estado: "RS"
};

console.log(novainfo);

function addInfo(info){
    return {
        ...info,
        data: '01/01/2018',
        token: '5s1d5df11d55d2d1'
    }
}
let info_iniciais = {
    nome: "Jamaica",
    tamanho: 1.85
};
var info_completas =  addInfo(info_iniciais);
console.log(`resultado do spread: ${info_completas}`);
console.log(info_completas);
