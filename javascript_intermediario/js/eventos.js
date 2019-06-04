function apertouMouse (){
     console.log("Apertou o botão do mouse");
}

function soltouMouse(){
     console.log("soltou o botão do mouse");
}

function mouseEmCima(){
     console.log("Mouse em cima");
}

function mouseSaiuDeCima(){
     console.log("Mouse saiu de cima");
}

function moveuMouse(){
     console.log("Mouse se movendo");
}

function clicou(){
     console.log("Clicou!");
}

function btndireit(){
     console.log("Botão direito Clicou!");
     return false;
}

function cliqueDuplo(){
     console.log("Clicou duas vezes");
}

function apertouTecla(event){

     var tecla_precionada = event.keyCode;
     console.log("Apertou alguma tecla: "+tecla_precionada);
}

function soltouBotao(event){
     var tecla_precionada = event.keyCode;
     console.log("Soltou a tecla: "+tecla_precionada); 
}

function presionouBotão(event){
     var tecla_precionada = event.keyCode;
     var shift = event.shiftKey;
     console.log("Soltou a tecla: "+tecla_precionada+" \n shift: "+shift);

     if(!event.shiftKey){
          console.log("SHIFT: inativo");
          return;
     }

     console.log("SHIFT ativo");
     return;
}