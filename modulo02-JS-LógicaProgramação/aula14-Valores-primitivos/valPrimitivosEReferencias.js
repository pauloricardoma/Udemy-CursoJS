/*
Primitivos (imutáveis) - string, number, boolean, undefined,
null (bigint, symbol) - Valores copiados

Referência (mutável) - array, object, function - Passados por referência
*/
/*
let nome = "Luiz";
nome = "Otávio";
console.log(nome);

let a = "A";
let b = a; // Cópia
console.log(a, b);

a = "Outra coisa";
console.log(a, b);
*/
/*
let a = [1, 2, 3]; // tanto 'a' quanto 'b' apontam para o mesmo valor na memória
let b = a;
let c = b;

console.log(a, b);

a.push(4);
console.log(a, b);

b.pop();
console.log(a, b);

a.push("Luiz");
console.log(c);
*/
/*
let a = [1, 2, 3]; // tanto 'a' quanto 'b' apontam para o mesmo valor na memória
let b = [...a]; // nesse caso o valor de 'a' foi puxado/copiado pra dentro de 'b', foi feito um spread do array 'a' dentro e 'b'
let c = b;

console.log(a, b);

a.push(4);
console.log(a, b);

b.pop();
console.log(a, b);

a.push("Luiz");
console.log(a, c);
*/
const a = {
  nome: "Luiz",
  sobrenome: "Otávio",
};
const b = a; // a variável vai apontar para a mesma variável

b.nome = "João";
console.log(a);
console.log(b);
