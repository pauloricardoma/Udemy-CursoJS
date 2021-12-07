// Escreva uma função que recebe 2 números e retorne o maior deles

function maior(x, y) {
  if (x > y) return `${x} é maior.`;
  else if (y > x) return `${y} é maior.`;
  return `Os números são iguais.`;
}

const max2 = (x, y) => (x > y ? x : y);

console.log(maior(10, 20));
console.log(maior(50, 5));
console.log(maior(25, 25));
console.log('-------');
console.log(max2(10, 20));
console.log(max2(50, 5));
console.log(max2(25, 25));
