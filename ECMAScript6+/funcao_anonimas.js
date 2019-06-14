function somar(anterior, proximo){
    return anterior + proximo;
}

function adicionar(...numeros){
    let total = numeros.reduce(somar);
    return total;
}

//com função anonima
function adicionar2(...numeros){
    let total = numeros.reduce(function (anterior, proximo){
        return anterior + proximo;
    });
    return total;
}

//função anonima, outra forma
function adicionar3(...numeros){
    let total = numeros.reduce((anterior, proximo) => {
        return anterior + proximo;
    });
    return total;
}

//função anonima, reduzida , somente uma operação
function adicionar4(...numeros){
    let total = numeros.reduce((anterior, proximo) => anterior + proximo);
    return total;
}

function adicionar5(...numeros) {
    let funcao_anonima = (p_numeros) => {
        let total = 0;
        for (let index in p_numeros){
            total += p_numeros[index];
        }
        return total;
    }
    return funcao_anonima(numeros);
}

console.log(adicionar(1, 8, 45, 60, 100));
console.log(adicionar2(1, 8, 45, 60, 100));
console.log(adicionar3(1, 8, 45, 60, 100));
console.log(adicionar4(1, 8, 45, 60, 100));
console.log(adicionar5(1, 8, 45, 60, 100));
