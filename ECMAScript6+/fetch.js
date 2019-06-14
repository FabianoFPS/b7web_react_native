fetch('https://alunos.b7web.com.br/api/ping').then((resposta) => {
    resposta.json().then((json) => {
        console.log(json);
        
    });
});

fetch('https://alunos.b7web.com.br/api/ping')
.then((resposta) => resposta.json())
.then((json) => console.log(json));

const URL = 'https://alunos.b7web.com.br/api/ping';
const PARAMETROS = {
    method: 'POST',
    body: JSON.stringify({
        nome: 'Bonieky',
        idade: 99
    })
}

fetch(URL, PARAMETROS)
.then((resposta) => resposta.json())
.then((json) => console.log(json));
