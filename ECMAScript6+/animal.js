const _metodoPrivado = Symbol('metodoPrivado');

//https://medium.com/front-end-weekly/private-methods-in-es6-and-writing-your-own-db-b2e30866521f
//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Symbol
//https://developer.mozilla.org/pt-BR/docs/Glossario/Symbol

class Animal {
    constructor(tipo, pernas){
        this.tipo = tipo;
        this.pernas = pernas;
    }

    falar(som = "Falando qualquer coisa"){
        return som;
    }

    get dados(){
        return `Tipo: ${this.tipo}, Pernas: ${this.pernas}`;
    }

    [_metodoPrivado](string){
        return string;
    }

    chamaPrivado(){
        return this[_metodoPrivado]("Executou privado");
    }
}

export class Gato extends Animal{
    constructor(cor, pernas){
        super("Gato", pernas);//invoca a implementação da classe pai

        this.cor = cor;
    }

    falar(som = "Miau"){
        return som;
    }

    getCor(){
        return this.cor;
    }

    get pele(){
        return this.cor;
    }
}