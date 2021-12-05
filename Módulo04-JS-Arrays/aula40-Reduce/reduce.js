// Reduce -> uso original de reduzir pra somente um elemento

// Some todos os números (reduce)
// Retorne um array com os pares (filter)
// Retorne um array com o dobro dos valores (map)
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const total = numeros.reduce((acumulador, valor, indice, array) => {
  acumulador += valor;
  return acumulador;
}, 0); // valor inicial do acumulador
console.log(total);

const somaPares = numeros.reduce((acumulador, valor) => {
  if (valor % 2 === 0) acumulador += valor;
  return acumulador;
}, 0);
console.log(somaPares);

// const pares = numeros.filter((numeros) => numeros % 2 === 0);
// fazendo com reduce para teste
const pares = numeros.reduce((acumulador, valor, indice, array) => {
  if (valor % 2 === 0) acumulador.push(valor);
  return acumulador;
}, []); // se ão mandar valor inicial, seria o primeiro item, podemos passar um array, que seria o acumulador
console.log(pares);

// fazendo com reduce em vez de map
const dobro = numeros.reduce((acumulador, valor, indice, array) => {
  acumulador.push(valor * 2);
  return acumulador;
}, []); // se ão mandar valor inicial, seria o primeiro item, podemos passar um array, que seria o acumulador
console.log(dobro);

// arrow function não precisa de return, nem de {}, quando só tem uma linha curta

// Retorne a pessoa mais velha
const pessoas = [
  { nome: 'Luiz', idade: 62 },
  { nome: 'Maria', idade: 23 },
  { nome: 'Eduardo', idade: 55 },
  { nome: 'Letícia', idade: 19 },
  { nome: 'Rosana', idade: 75 },
  { nome: 'Wallace', idade: 47 },
];
const maisVelha = pessoas.reduce((acumulador, valor) => {
  if (acumulador.idade > valor.idade) return acumulador;
  return valor;
});
console.log(maisVelha);
