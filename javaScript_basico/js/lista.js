function adicionarIgrediente(){
    var ingrediente = document.getElementById("ingrediente").value;
    var listaHtml = document.getElementById("lista").innerHTML;
    listaHtml = listaHtml+"<li>"+ingrediente+"</li>";
    document.getElementById("lista").innerHTML = listaHtml;
}