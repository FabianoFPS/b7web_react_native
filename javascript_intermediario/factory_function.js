function createCounter(){
    let valor = 0;
    return {
        add: function (){
            return ++valor;
        }
    };
}

function CriaContador(){
    let valor = 0;
    this.add = function (){
        return ++valor;
    };
}

// valor fica incessivel.
let counter = createCounter();
console.log(counter.valor);
console.log(counter.add());
console.log(counter.add());
console.log(counter.add());
console.log(counter.add());

let contador = new CriaContador();
console.log(contador.valor);
console.log(contador.add());
console.log(contador.add());
console.log(contador.add());
console.log(contador.add());
console.log(contador.add());
