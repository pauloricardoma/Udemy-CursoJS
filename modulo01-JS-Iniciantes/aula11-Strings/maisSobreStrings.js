//               01234567 strings são indexadas, tem índice
let umaString = "Um texto";

console.log(umaString.charAt(6));
console.log(umaString.concat(" em um lindo dia."));
console.log(umaString + " em um lindo dia.");
console.log(`${umaString} em um lindo dia.`);

console.log(umaString.indexOf("Texto")); // indice -1, não existente
console.log(umaString.indexOf("o", 3)); // buscar a partir do índice 3

console.log(umaString.lastIndexOf("o", 3)); // busca a partir do fim
console.log(umaString.lastIndexOf("m", 3)); // busca de trás pra frente

console.log(umaString.match(/[a-z]/g)); // referente a expressões regulares
console.log(umaString.match(/[a-z]/)); // com flag 'g' retorna o array

console.log(umaString.search(/[a-z]/g)); // retorna o indice onde eu pedi
console.log(umaString.search(/[a-z]/)); // no caso aqui o 'm', a flag 'g' não faz diferença
console.log(umaString.search(/x/)); // parecido com indexOf, mas aceita expressões regulares

console.log(umaString.replace("Um", "Outra")); // substitui 'Um' pra 'Outra'
console.log(umaString.replace(/Um/, "Outra")); // posso usar expressões regulares

//                 0123456789
let outraString = "O rato roeu a roupa do rei de roma.";

console.log(outraString.replace(/r/, "#"));
console.log(outraString.replace(/r/g, "#")); // com a flag 'g' substitui em todos os 'r'

console.log(outraString.length); // tamanho da string

console.log(outraString.slice(2, 6)); // cortar a string
console.log(outraString.slice(-3)); // cortar a string
console.log(outraString.length - 3);
console.log(outraString.slice(-3)); // igual o de baixa
console.log(outraString.slice(32)); // igual o de cima
console.log(outraString.slice(-5)); // pegar só roma
console.log(outraString.slice(-5, outraString.length - 1)); // igual o de baixo
console.log(outraString.slice(-5, -1)); // igual o de cima

console.log(outraString.substring(outraString.length - 5)); // mesma coisa de slice, porém maior
console.log(
  outraString.substring(outraString.length - 5, outraString.length - 1)
);

console.log(outraString.split(" ")); // separar o array
console.log(outraString.split("r"));
console.log(outraString.split(" ", 2));
console.log(outraString.split(" ", 3));

console.log(outraString.toUpperCase());
console.log(outraString.toLowerCase());
