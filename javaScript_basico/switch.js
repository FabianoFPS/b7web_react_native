var x = prompt("Qual é o número?");

var numero = parseInt(x); /*Tranforma em int*/

switch(x){
     case "0":
          alert("X é 0");
          break;
     case "1":
          alert("X é 1");
          break;
     default:
          alert("Ninguem foi satisfeito");
          break;
}