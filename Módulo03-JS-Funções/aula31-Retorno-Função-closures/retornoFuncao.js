// return
// Retorna um valor
// Termina a função

// function soma(a, b) {
//   return a + b;
// }
// console.log(soma(5, 2));

// document.addEventListener('click', () => {
//   document.body.style.backgroundColor = 'red';
// });

function criaPessoa(nome, sobrenome) {
  return {
    nome: nome,
    sobrenome: sobrenome,
  };
}
const p1 = criaPessoa('Juv', 'Pad');
const p2 = {
  nome: 'Juv',
  sobrenome: 'Pad',
};
console.log(p1, typeof p1);
console.log(p2, typeof p2);

//
function falaFrase(comeco) {
  function falaResto(resto) {
    return comeco + ' ' + resto;
  }
  return falaResto;
}
const fala = falaFrase('Olá');
const resto = fala('mundo!');
console.log(resto);

//
// function duplica(n) {
//   return n * 2;
// }
// function triplica(n) {
//   return n * 3;
// }
// function quadriplica(n) {
//   return n * 4;
// }
function criaMultiplicador(multiplicador) {
  return function multiplicacao(n) {
    return n * multiplicador;
  };
}
const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);
console.log(duplica(2));
console.log(triplica(2));
console.log(quadriplica(2));
