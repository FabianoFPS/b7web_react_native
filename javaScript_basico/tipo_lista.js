let valores = [1, 4,'cinco', 8 ,9, "dez", 10, 11,"Doze", 13];

for (let index in valores){

    if (typeof valores[index] == 'string'){
        console.log(valores[index]);
        valores[index] = index;
        console.log(valores[index]);
    }
        
}

let invertido = [5,4,3,2,1];
let tamanho = invertido.length;
let ordenado = [];

for (let index = (tamanho - 1); index >= 0; index--){
    ordenado.push(invertido[index]);
}
console.log(ordenado);
