function verificar(){
    var n1 = parseInt(document.getElementById("n1").value);
    var n2 = parseInt(document.getElementById("n2").value);

    if(n1 == n2){
         alert("Número certo");
    }else{
         alert("Número errado!");
    }
    resetar();
}

function resetar(){

     var randon = Math.floor(Math.random()*100);
     document.getElementById("n1").value = randon;
     document.getElementById("n2").value =  "";
}
