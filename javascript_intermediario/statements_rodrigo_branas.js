let text = "Lorem ipsum dolor sit amet, consectetur ...";

let toHackerCase = function(text){
     
     let hackerTextArray = [];

     for(let indice = 0; indice < text.length; indice++){

          if (text.charAt(indice) === 'o'){
               hackerTextArray.push('0');
          }else if(text.charAt(indice) === 'l'){
               hackerTextArray.push('1');
          }else if(text.charAt(indice) === 'e'){
               hackerTextArray.push('3');
          }else if(text.charAt(indice) === 'a'){
               hackerTextArray.push('4');
          }
          else{
               hackerTextArray.push(text.charAt(indice));
          }
     }

     return hackerTextArray.join("");
};

console.log(toHackerCase(text));

let toHackerCase2 = function(text){
     
     let hackerTextArray = [];

     for(let indice = 0; indice < text.length; indice++){

          if (text.charAt(indice) === 'o'){
               hackerTextArray.push('0');
               continue;
          }
          if(text.charAt(indice) === 'l'){
               hackerTextArray.push('1');
               continue;
          }
          if(text.charAt(indice) === 'e'){
               hackerTextArray.push('3');
               continue;
          }
          if(text.charAt(indice) === 'a'){
               hackerTextArray.push('4');
               continue;
          }
          
          hackerTextArray.push(text.charAt(indice));
          
     }

     return hackerTextArray.join("");
};

console.log(toHackerCase2(text));

let toHackerCase3 = function(text){
     
     let hackerTextArray = [];

     for(let indice = 0; indice < text.length; indice++){

          switch(text.charAt(indice)){
               case 'o':
                    hackerTextArray.push('0');
                    break;
               case 'l':
                    hackerTextArray.push('1');
                    break;
               case 'e':
                    hackerTextArray.push('3');
                    break;
               case 'a':
                    hackerTextArray.push('4');
                    break;
               default:
                    hackerTextArray.push(text.charAt(indice));
          }
     }

     return hackerTextArray.join("");
};

console.log(toHackerCase3(text));

let HackerTextError = function(message){
     this.message = message;
     this.name = "HackerTextError";
}

let toHackerCase4 = function(text){
     
     if(!text) throw new HackerTextError("Texto inválido");
     if (typeof text !== "string") throw new HackerTextError("Tipo Inválido");

     let hackerTextArray = [];
     let indice = 0;
     while(indice < text.length){

          switch(text.charAt(indice)){
               case 'o':
                    hackerTextArray.push('0');
                    break;
               case 'l':
                    hackerTextArray.push('1');
                    break;
               case 'e':
                    hackerTextArray.push('3');
                    break;
               case 'a':
                    hackerTextArray.push('4');
                    break;
               default:
                    hackerTextArray.push(text.charAt(indice));
          }
          indice++;
     }

     return hackerTextArray.join("");
};

try{
     console.log(toHackerCase4(""));
}catch(excecao){
     console.log(`Exceção: ${excecao.message}, ${excecao.name}`);
     
}

try{
     console.log(toHackerCase4(1));
}catch(excecao){
     console.log(`Exceção: ${excecao.message}, ${excecao.name}`);
     
}

console.log(toHackerCase4(text));