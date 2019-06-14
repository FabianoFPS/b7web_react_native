function setInfo (p_nome, p_sobrenome, p_idade){
    const newInfo = {nome:p_nome, sobrenome:p_sobrenome, idade:p_idade};
    return newInfo;
}

var info = setInfo("Fabiano", "Stoffel", 35);
console.log(info);

//objeto literal, se o parametro tem o mesmo nome que a chave

function setInfo2 (nome, sobrenome, idade){
    const newInfo = {nome, sobrenome, idade};
    return newInfo;
}

var info2 = setInfo2("Fulano", "rodovaldo", 87);
console.log(info2);