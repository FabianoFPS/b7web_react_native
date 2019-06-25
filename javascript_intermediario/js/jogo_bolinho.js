function addBola() {
     var bola = document.createElement("div");
     var posicao_x = Math.floor(Math.random() * 500);
     var posicao_y = Math.floor(Math.random() * 400);
     var R = Math.floor(Math.random() * 255);
     var G = Math.floor(Math.random() * 255);
     var B = Math.floor(Math.random() * 255);

     bola.setAttribute("class", "bola");
     bola.setAttribute("style", "left:"+posicao_x+"px; top:"+posicao_y+"px;"+" background-color: rgb("+R+", "+G+", "+B+");");
     bola.setAttribute("onclick", "estourar(this);");

     document.body.appendChild(bola);
}

function estourar(elemento) {
     document.body.removeChild(elemento);
}

function iniciar() {
     setInterval(addBola, 500);
}