function setInfo(nome, sobre_nome = '', status = false){
   
   if (typeof nome === "undefined"){

    throw "Nome indefinido";
   }
   console.log({nome, sobre_nome, status});
}

try{
    setInfo("fabiano", "Francisco", true);
    setInfo("Lupin");
    setInfo();
}catch(exception){
    console.log(exception);
}
