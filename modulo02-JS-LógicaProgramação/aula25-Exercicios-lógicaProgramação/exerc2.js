// Escreva uma função chamada ePaisagem que recebe dois argumentos,
// largura e altura de uma imagem (number).
// Retorne true se a imagem estiver no modo paisagem.

function ePaisagem(largura, altura) {
  return largura > altura ? true : false;
}

function ePaisagem3(largura, altura) {
  return largura > altura;
}

const ePaisagem2 = (larg, alt) => larg > alt;

console.log(ePaisagem(1920, 1080));
console.log(ePaisagem2(1080, 1920));
console.log(ePaisagem3(1080, 1920));
