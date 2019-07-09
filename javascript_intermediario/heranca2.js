let criarHomem = function (nome, idade){
     return {
          nome: nome,
          idade: idade,
          sexo: "masculino"
     };
};

let joao = criarHomem("João", 20);

console.table(joao);

function Homem (nome, idade){
     this.nome = nome;
     this.idade = idade;
     this.sexo = "masculino"
};

let pedro =  new Homem("Pedro", 18);
console.table(pedro);

let pablo = {};
Homem.call(pablo, "Pablo", 100);
console.table(pablo);

let bicudo = {};
Homem.apply(bicudo, ["Bicudo P.", 75]);
console.table(bicudo);

function Homem2 (nome, idade){
     this.nome = nome;
     this.idade = idade;
}
Homem2.prototype.sexo = "masculino";

let josias = new Homem2("Josias B.", 50);
console.table(josias);
console.log(josias.sexo);

let currupira = {};
currupira.__proto__ = Homem2.prototype;
Homem2.apply(currupira, ["Curru Pira", 200]);
console.table(currupira);
console.log(currupira.sexo);

Homem2.prototype.sexo = "Feminino";
console.log(josias.sexo);
console.log(currupira.sexo);

let _new = function (p_function, atributos){
     let objeto = {};
     objeto.__proto__ = p_function.prototype;
     p_function.apply(objeto, atributos);
     return objeto;
};

Homem2.prototype.sexo = "indefinido";

let dados = ["Ricardo", 350];
let pessoa = _new(Homem2, dados);
console.table(pessoa);
console.log(pessoa.sexo);

let _new2 = function (p_function){
     let objeto = {};
     objeto.__proto__ = p_function.prototype;
     p_function.apply(objeto, Array.prototype.slice.call(arguments,1));
     return objeto;
};

let pessoa2 = _new2(Homem2, "RODOVALDO BISCATE", 400);
console.table(pessoa2);
console.log(pessoa2.sexo);

let _new3 = function(f){
     let res = {};
     if(f.prototype!==null){
          res.__proto__ = f.prototype;
     }
     
     let ret = f.apply(res, Array.prototype.slice.call(arguments,1));

     if((typeof ret === "object" || typeof ret === "function") && ret !== null){
          return ret;
     }

     return res;
};