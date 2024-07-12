//
// 5. Crie uma função que receba um array de numeros e retorne um array contendo apenas os números multiplicados por 5
//
var array3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function multiplicaPor5(param) {
  var toReturn;

  return param.map(item => {
     return item * 5
  });
}
console.log(multiplicaPor5(array3));