//Funcion para detectar null y espacios 
function isEmptyOrSpaces(str) {
  return str === null || str.match(/^ *$/) !== null;
}
console.log(isEmptyOrSpaces("challenge 1 - isEmpty"));


//Funcion para detectar una subcadena
function subString(pattern, text) {
  if (pattern.length == 0) return 0;

  var lsp = [0];
  for (var i = 1; i < pattern.length; i++) {
    var j = lsp[i - 1];
    while (j > 0 && pattern[i] !== pattern[j]) j = lsp[j - 1];
    if (pattern[i] === pattern[j]) j++;
    lsp.push(j);
  }

  var j = 0;
  for (var i = 0; i < text.length; i++) {
    while (j > 0 && text[i] != pattern[j]) j = lsp[j - 1];
    if (text[i] == pattern[j]) {
      j++;
      if (j == pattern.length) return i - (j - 1);
    }
  }
  return -1;
}

console.log(subString("123", "01234567") != -1); //True
console.log(subString("456", "78492621") != -1); //False


//#3 Funcion que retorna un Json


//#4 Funcion que retorna elnumero mas grande del arreglo 
let arr = [7, 1, 56, 89, 25, 60, 99];
temp = 0;

arr.forEach((element) => {
  if (temp < element) {
    temp = element;
  }
});

console.log(`El numero mas grande es: ${temp}`);
