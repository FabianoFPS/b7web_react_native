function recebeVariosParametos(...parametros){
    console.log(parametros);
}

recebeVariosParametos(45, 8, 9, 2, "string", 'mais uma string');

function adicionar(array_origem, ...novos) {
    
    return [
        ...array_origem,
        ...novos
    ];
}

let array = ["juca", "joão bolão", "xuxa"];
var retorno = adicionar(array, "buzão", "pipa", "rolete");
console.log(retorno);