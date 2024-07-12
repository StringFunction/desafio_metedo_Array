//
// 2. Crie uma função que receba um array de números e retorne o maior número presente no array
//
var array2 = [1, 2, 3, 4, 50, 6, 7, 8, 9, 10];

function maiorNumero(param) {
  var toReturn = 0
  
   for(var i = 0; i < param.length; i++){
    if (param[i] > toReturn) {
        toReturn = param[i]
    
        
    }
   }
  return toReturn;
}
console.log(maiorNumero(array2));
