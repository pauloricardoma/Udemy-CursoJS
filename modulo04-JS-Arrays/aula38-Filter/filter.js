// Filter -> Sempre retorna um array com a mesma quantia de elementos, ou menos.

// Retorne os números maiores que 10
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const numerosFiltrados = numeros.filter((valor) => valor > 10);
console.log(numerosFiltrados);

// EU - sem filter
// const numerosMaior10 = [];
// for (let i = 0; i < numeros.length; i++) {
//   if (numeros[i] > 10) {
//     numerosMaior10.push(numeros[i]);
//   }
// }
// console.log(numerosMaior10);

//

// Retorne as pessoas que tem o nome com 5 letras ou mais
// Retorne as pessoas com mais de 50 anos
// Retorne as pessoas cujo nome termina com a
const pessoas = [
  { nome: 'Luiz', idade: 62 },
  { nome: 'Maria', idade: 23 },
  { nome: 'Eduardo', idade: 55 },
  { nome: 'Letícia', idade: 19 },
  { nome: 'Rosana', idade: 32 },
  { nome: 'Wallace', idade: 47 },
];
const pessoasComNomeGrande = pessoas.filter((obj) => obj.nome.length >= 5);
console.log(pessoasComNomeGrande);
const pessoasComMaisDeCinquenta = pessoas.filter((obj) => obj.idade > 50);
console.log(pessoasComMaisDeCinquenta);
const pessoasNomeTerminaComA = pessoas.filter((obj) => {
  return obj.nome.toLocaleLowerCase().endsWith('a');
});
console.log(pessoasNomeTerminaComA);

// EU
// const filter1 = pessoas.filter((pessoas) => pessoas.nome.length >= 5);
// console.log(filter1);
// const filter2 = pessoas.filter((pessoas) => pessoas.idade > 50);
// console.log(filter2);
// const filter3 = pessoas.filter(
//   (pessoas) => pessoas.nome.split('').pop() === 'a'
// );
// console.log(filter3);
