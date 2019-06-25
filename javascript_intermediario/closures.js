function helloWord(){
    let mensagem = "Hello Word!";

    return function (){
        return mensagem;
    }
}


let recebeFuncao = helloWord();
console.log(recebeFuncao());
console.log( helloWord()());
