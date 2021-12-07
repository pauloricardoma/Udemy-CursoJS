// arguments, que sustenta todos os argumentos enviados
// somente para funções function, não funciona com arrow function

// function funcao(a, b, c) {
//   let total = 0;
//   for (let argumento of arguments) {
//     total += argumento;
//   }
//   console.log(total, a, b, c);
// }
// funcao(1, 2, 3, 4, 5);

// function funcao(a, b = 0, c = 2) {
//   console.log(a + b + c);
// }
// funcao(2, 4);
// funcao(2, undefined, 4);

// parâmetros via desestruturação de objetos
// function funcao({ nome, sobrenome, idade }) {
//   console.log(nome, sobrenome, idade);
// }
// let obj = { nome: 'Juv', sobrenome: 'Sap', idade: 40 };
// funcao({ nome: 'Juv', sobrenome: 'Sap', idade: 40 });
// funcao(obj);

// function funcao2([valor1, valor2, valor3]) {
//   console.log(valor1, valor2, valor3);
// }
// funcao2(['Juvenil', 'Padwan', 120]);

function conta(operador, acumulador, ...numeros) {
  for (let numero of numeros) {
    if (operador === '+') acumulador += numero;
    if (operador === '-') acumulador -= numero;
    if (operador === '/') acumulador /= numero;
    if (operador === '*') acumulador *= numero;
  }
  console.log(acumulador);
}
conta('+', 1, 20, 30, 40, 50);

conta2 = (...args) => {
  console.log(args);
};
conta2('+', 1, 20, 30, 40, 50);
