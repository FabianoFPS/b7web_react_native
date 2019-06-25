(function (){
    console.log("Executa?");
})()

const array = [1,2,3];
const arrayModificado = array.map(valor => valor*2);
console.log(arrayModificado);

class Tabuada {
    
    constructor(numero, valores){
        this.numero = numero;
        this.valores = valores;
    }

    get tabela(){

        return this.valores.map(valor => {
            return {
                numero: this.numero,
                valor: valor,
                resultado: this.numero * valor
            }
        });
    }

    get tabelaSemArrowFunction (){
        return this.valores.map(function (valor) {
            return {
                numero: this.numero,
                valor: valor,
                resultado: this.numero * valor
            }
        }.bind(this));
    }
}

let novaTabuada = new Tabuada(4,[2,3,4]);

console.table(novaTabuada.tabela);
console.table(novaTabuada.tabelaSemArrowFunction);
