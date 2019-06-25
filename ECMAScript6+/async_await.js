function requisitar(){
    const URL = 'https://alunos.b7web.com.br/api/ping';
    const BODY = {
        nome: 'Fabiano',
        idade: 35
    }
    const PARAMETROS = {
        method: 'POST',
        body: JSON.stringify(BODY)
    }

    fetch(URL, PARAMETROS)
    .then((resposta) => resposta.json())
    .then((json) => console.log("requisitar1: \n"+json));
    console.log('[1] Executa antes do fetch?');
    
}

requisitar();

async function requisitar2(){
    const URL = 'https://alunos.b7web.com.br/api/ping';
    const BODY = {
        nome: 'Francisco',
        idade: 60
    }
    const PARAMETROS = {
        method: 'POST',
        body: JSON.stringify(BODY)
    }

    const resposta = await fetch(URL, PARAMETROS);
    const j = resposta.json();
    console.log("requisitar2: \n"+j);
    
    //return json;
    console.log('[2] Executa antes do fetch?');
}

//console.log(requisitar2());
requisitar2();
console.log("[3] Executa antes do requisitar2()?");

