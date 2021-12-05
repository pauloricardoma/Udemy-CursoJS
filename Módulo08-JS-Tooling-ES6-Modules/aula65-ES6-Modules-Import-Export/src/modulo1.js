// const nome = 'Luiz';
// const sobrenome = 'Miranda';
// const idade = 30;

// function soma(x, y) {
//   return x + y;
// }

// class Pessoa {
//   constructor(nome, sobrenome) {
//     this.nome = nome;
//     this.sobrenome = sobrenome;
//   }
// }

// export default (x, y) => x * y;

// export { nome, sobrenome, idade, soma, Pessoa };
// export { nome as nome3, sobrenome, idade, soma };

// GERALMENTE, veremos assim, classes maior como export default também
export const nome = 'Luiz';
export const sobrenome = 'Miranda';
export const idade = 30;

export function soma(x, y) {
  return x + y;
}

export default class Pessoa {
  constructor(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }
}
