var nome = "Fabiano";
console.log(nome);

let sobrenome = "Stoffel";
console.log(sobrenome);

var array1 = [1,2,3];
for (var index in array1){
    console.log(array1[index]);
}

console.log("index:"+index);

for (let index_let in array1){
    console.log(array1[index_let]);
}

//console.log(index_let);//variavel let existe apenas no escopo onde foi criada

const nome_completo = "Fabiano Stoffel";
console.log(nome_completo);

nome_completo = "consigo alterar?";