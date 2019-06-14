function validar(params) {
    var valor = document.getElementById("id_numero").value;
    var tamanho_valor = valor.length;

    if(tamanho_valor > 2){
        alert("Valor digitado ("+valor+") execedeu limite permitido!");
        //document.getElementById("id_numero").setAttribute("Value", "");
        document.getElementById("id_numero").value = '';
        return false;
    }

    return true;
}