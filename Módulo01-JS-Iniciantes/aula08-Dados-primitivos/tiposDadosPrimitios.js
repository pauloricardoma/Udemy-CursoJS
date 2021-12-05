// string, number, undefined, null, boolean, symbol
const nome = "Paul"; // string
const nome1 = "Paul"; // string
const nome2 = `Paul`; // string
const num1 = 10; // number
const num2 = 10.52; // number
let nomeAluno; // undefined -> não aponta pra local nenhum na memória
let sobrenomeAluno = null; // Nulo -> não aponta pra local nenhum na memória
const aprovado = false; // Boolean = true, false (lógico)

const a = [1, 2];
const b = a;

console.log(a, b);

b.push(3);
console.log(a, b);

let a = 2;
const b = a;

console.log(a, b);
a = 3;
console.log(a, b);
