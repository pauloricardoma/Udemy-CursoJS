// Retorne a soma do dobro de todos os pares
// -> Filtrar pares
// -> Dobrar os valores
// -> Reduzir (somar tudo)
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
// const numerosPares = numeros.filter((valor) => valor % 2 === 0);
// const dobraPares = numerosPares.map((valor) => valor * 2);
// const somaTotal = dobraPares.reduce((acumulador, valor) => {
//   return (acumulador += valor);
// }, 0);
// console.log(numerosPares);
// console.log(dobraPares);
// console.log(somaTotal);
const tudoEmUm = numeros
  .filter((valor) => valor % 2 === 0)
  .map((valor) => valor * 2)
  .reduce((ac, valor) => {
    return (ac += valor);
  }, 0);
console.log(tudoEmUm);
