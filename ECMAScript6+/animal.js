const _metodoPrivado = Symbol('metodoPrivado');

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