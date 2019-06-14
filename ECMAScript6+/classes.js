import { Gato } from "./animal.js";
let gato = new Gato("Preto", 4);
console.log(gato.falar('Miau Miau'));
gato.pernas = 3;
console.log(gato.dados);
console.log(gato.getCor());
console.log(gato.pele);
console.log(gato.chamaPrivado());



