// const nome = 'luiz';
// const sobrenome = 'Miranda';

// const falaNome = () => nome + ' ' + sobrenome;

// // module.exports.nome = nome;
// // module.exports.sobrenome = sobrenome;
// // module.exports.falaNome = falaNome;
// // exports.nome = nome;
// // exports.sobrenome = sobrenome;
// // exports.falaNome = falaNome;
// // this.qualquerCoisa = 'O que eu quiser exportar';
// exports.NOME = nome;
// exports.sobrenome = sobrenome;
// exports.falaNome = falaNome;
// this.qualquerCoisa = 'O que eu quiser exportar';

// console.log(module.exports);

class Pessoa {
  constructor(nome) {
    this.nome = nome;
  }
}

exports.Pessoa = Pessoa;

const nome = 'Luiz';
const sobrenome = 'Miranda';

module.exports = {
  nome,
  sobrenome,
  Pessoa,
};

exports.outraCoisa = 'Outra coisa'; // não funciona mais, por eu ter sobescrito meu objeto em cima

exports = {}; // não seria possível
