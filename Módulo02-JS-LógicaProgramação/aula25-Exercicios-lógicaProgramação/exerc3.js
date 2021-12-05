// Escreva uma função que recebe um número e retorne o seguinte:
// Número é divisível por 3 = Fizz
// Número é divisível por 5 = Buzz
// Número é divisível por 3 e 5 = FizzBuzz
// Número NÃO é divisível por 3 e 5 = Retorna o próprio número
// Checar se o número é realmente um número
// Use a função com números de 0 a 100
function fizzBuzz(x) {
  if (!isNaN(x)) {
    if (x % 5 === 0 && x % 3 === 0) return 'FizzBuzz';
    else if (x % 3 === 0) return 'Fizz';
    else if (x % 5 === 0) return 'Buzz';
    else return x;
  }
  return 'Não é um número';
}

for (let i = 0; i <= 100; i++) {
  console.log(i, fizzBuzz(i));
}
console.log(fizzBuzz('s'));
/////////////////////////////////////////
function fizzBuzzProf(x) {
  if (typeof numero !== 'number') return numero;
  if (x % 5 === 0 && x % 3 === 0) return 'FizzBuzz';
  if (x % 3 === 0) return 'Fizz';
  if (x % 5 === 0) return 'Buzz';
}
