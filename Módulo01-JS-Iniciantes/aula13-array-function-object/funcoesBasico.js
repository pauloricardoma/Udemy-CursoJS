// function saudacao(nome) {            // função recebe o parâmetro nome e retorna um valor
//   return `Bom dia ${nome}!`;
// }
// const variavel = saudacao("Luiz");   // variável = a função com o parâmetro 'Luiz'
// console.log(variavel);

function soma(x = 1, y = 1) {
  const resultado = x + y;
  return resultado; // O que está abaixo de return não será executado
  console.log("Olá mundo!");
}

console.log(soma(2, 2));
console.log(soma(5, 10));
// console.log(resultado); // não consegue acessar nada dentro da função, está protegida
const resultado = soma(2, 2);
console.log(resultado);

const resultado2 = soma();
console.log(resultado2); // não retorna valor, ja que precisa ser inserido dois parâmetros

const resultado3 = soma("Luiz", "Otávio");
console.log(resultado3); // retorna concatenando os parãmetro por serem strings

const resultado4 = soma(); // se não for inserido parâmetro, será usado o (x=1, y=1) que foi indicado na função
console.log(resultado4); // se for inserido parâmetros, os mesmos serão usados

const raiz = function (n) {
  // nesse caso é necessário finalizar com ';', ja que a variável recebe a declaração de função
  return n ** 0.5; // a função recebe um parâmetro n=número e retorna a raiz quadrada
};

console.log(raiz(9));
/*

// utilizando 'arrow function' para a mesma função de cima

const raiz = (n) => {
  return n ** 0.5;
}; // essa funçao FICA:

const raiz = (n) => n ** 0.5; // por só ter uma linha, ela fica reduzida assim

*/
