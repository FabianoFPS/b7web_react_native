let counter = (function (){

    let _value = 0;

    let _add = function (){
        return ++_value;
    }

    let _reset = function () {
        value = 0;
        return (_value == 0);
    }
    return {
        add: _add,
        reset: _reset
    };
})();

console.log(counter._value);
console.log(counter.add());
console.log(counter.add());
console.log(counter.add());
console.log(counter.reset());
console.log(counter.add());
console.log(counter.add());
