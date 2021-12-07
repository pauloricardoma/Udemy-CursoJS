// Map -> sempre terá o mesmo tamanho do array original

// Dobre os números
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const numerosEmDobro = numeros.map((valor) => valor * 2);
console.log(numerosEmDobro);

// arrow function não precisa de return, nem de {}, quando só tem uma linha curta

// Para cada elemento:
// Retorne apenas uma string com o nome da pessoa
// Remova apenas a chave nome do objeto
// Adicione uma chave id em cada objeto
const pessoas = [
  { nome: 'Luiz', idade: 62 },
  { nome: 'Maria', idade: 23 },
  { nome: 'Eduardo', idade: 55 },
  { nome: 'Letícia', idade: 19 },
  { nome: 'Rosana', idade: 32 },
  { nome: 'Wallace', idade: 47 },
];
const umaString = pessoas.map((pessoas) => pessoas.nome);
console.log(umaString);
const removeChaveNome = pessoas.map((pessoas) => ({ idade: pessoas.idade }));
console.log(removeChaveNome);
const addChaveId = pessoas.map((pessoas, indice) => {
  const newObj = { id: indice + 1, ...pessoas };
  return newObj;
});
console.log(addChaveId);
console.log(pessoas);
// const addChaveId = pessoas.map((pessoas, indice) => ({
//   id: indice + 1,
//   ...pessoas,
// }));
// console.log(addChaveId);
// console.log(pessoas);
