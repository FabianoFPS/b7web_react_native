function addEndereco(endereco){

    let {cidade, estado} = endereco;
    const novoEndereco = {
        cidade,
        estado,
        pais:'brasil'
    };
    console.log(`${cidade}, ${estado}, ${novoEndereco.pais}`);
}

addEndereco({cidade:"Novo Haburgo", estado:"RS"});