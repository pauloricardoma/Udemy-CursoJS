//                -5       -4       -3         -2        -1
//                 0        1        2          3         4
const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];

// noms.splice(índice atual, quantos remover, elem1, elem2, elem2);
// pop
// const removidos = nomes.splice(3, 2, 'Luiz', 'Otávio'); no indice 3, e a partir dele remove 2 e coloca dois
// const removidos = nomes.splice(0, 1);
// Push
// nomes.splice(nomes.length, 0, 'Luiz');
// Unshift
nomes.splice(0, 0, 'Luiz', 'Otávio');
console.log(nomes);

// FORA DA MATÉRIA
// Palíndromo
// const nome = 'maria';
// const nom2 = nome.split('').reverse().join('');
// console.log(nome);
// console.log(nom2);
