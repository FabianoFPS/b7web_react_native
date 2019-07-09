let homem = {
     sexo: "masculino"
};

let joao = {
     nome: "João",
     idade: 20,
     __proto__:homem
};

let pedro = {
     nome: "Pedro",
     idade: 18,
     __proto__:homem
};

console.table(joao);
console.log(`Sexo do joao: ${joao.sexo}`);

console.table(pedro);
console.log(`Sexo do pedro: ${pedro.sexo}`);

let joao_2 = {
     nome: "João C.",
     idade: 20
};
Object.setPrototypeOf(joao_2, homem);

console.table(joao_2);
console.log(`Sexo do joao_2: ${joao_2.sexo}`);

let pedro_2 = Object.create(homem);
pedro_2.nome = "Pedro B.";
pedro_2.idade = 15;

console.table(pedro_2);
console.log(`Sexo do pedro_2: ${pedro_2.sexo}`);

let pablo = {
     nome: "Pablo",
     idade: 75,
     sexo: "feminino"
}
Object.setPrototypeOf(pablo, homem);

console.table(pablo);
console.log(`Sexo do pablo: ${pablo.sexo}`);
console.log("Propiedade do Objeto pablo: "+Object.keys(pablo));

delete pablo.sexo;
console.log(`Sexo do pablo: ${pablo.sexo}`);
console.log("Propiedade do Objeto pablo: "+Object.keys(pablo));

for(let property in joao){
     console.log(property);
}
console.log('------------------------------------');

for(let property in joao){
     if(!joao.hasOwnProperty(property)) continue;
     console.log(property);
}