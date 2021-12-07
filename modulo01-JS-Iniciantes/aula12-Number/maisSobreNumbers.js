// IEEE 754-2008 padrão de precisão
let num1 = 10.57128378971; // number
let num2 = 2.5; // number
let num3 = 10.25; // number

console.log(num1.toString() + num2); // retorna como string, mas não altera pra string
// num1 = num1.toString(); -> alteraria pra string
console.log(num1.toString(2)); // representação binária do número
console.log(num1.toFixed(2)); // limita as casa decimais, em 2 no caso demonstrado
console.log(Number.isInteger(num3)); // retorna se o número é um inteiro, true or falser

let temp = num3 * "Olá";
let temp2 = num3 * "5";

console.log(Number.isNaN(temp)); // retorna true por não ser um Number
console.log(Number.isNaN(temp2)); // retorna false por ser um Number
// NÃO FAZER CONTAS COM STRINGS
let num4 = 0.7;
let num5 = 0.1;

num4 = (num4 * 100 + num5 * 100) / 100; // 0.8
num4 = (num4 * 100 + num5 * 100) / 100; // 0.9
num4 = (num4 * 100 + num5 * 100) / 100; // 1.0

/* num4 += num5; // 0.8 // num4 = num4 + num5;
   num4 += num5; // 0.9 // num4 = num4 + num5;
   num4 += num5; // 1.0 // num4 = num4 + num5;
   num4 = Number(num4.toFixed(2)); // alterar para Number */
console.log(num4);
console.log(Number.isInteger(num4));

// Somente pra deixa claro que trabalhar com muitas casa decimais em um número pequena, pode acabar dando uma pequena imprecisão
// Uma boa de contornar a situação seria:
num4 = Number(num4.toFixed(2)); // acabaria com a certa imprecisão

console.log(num4.toFixed(2)); // se fosse somente para exibir um resultado para o cliente
