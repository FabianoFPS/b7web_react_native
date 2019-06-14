function fazer() {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("ok");
        },3000);
    });

    return promise;
}

fazer().then((resposta) => {
    console.log(`Resposta da Promise: ${resposta}`);
    
});

console.log("Segundo log");
