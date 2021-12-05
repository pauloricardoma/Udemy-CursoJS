// let a = 'A';
// let b = 'B';
// let c = 'C';

// const numeros = [1, 2, 3];
// [a, b, c] = [1, 2, 3];

// console.log(numeros);

//               0     1     2     3     4     5     6     7     8   -> indice
const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];
// ... rest -> pegar o resto, ... spred -> espalhar
// const [um, dois, tres, ...resto] = numeros;
const [um, , tres, , cinco, , sete] = numeros;
console.log(um, tres, cinco);

const numeross = [
  //  0
  //0 1 2
  [1, 2, 3],
  //  1
  //0 1 2
  [4, 5, 6],
  //  2
  //0 1 2
  [7, 8, 9],
];
console.log(numeross[1][2]);

const [, [, , seis]] = numeross;
console.log(seis);

const [lista1, lista2, lista3] = numeross;
console.log(lista3[2]);
