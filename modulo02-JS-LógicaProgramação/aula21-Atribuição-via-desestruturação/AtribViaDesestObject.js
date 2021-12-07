const pessoa = {
  nome: 'Luiz',
  sobrenome: 'Miranda',
  idade: 30,
  endereco: {
    rua: 'Av Brasil',
    numero: 320,
  },
};
// const nome = pessoa.nome;
const { nome, sobrenome, idade, endereco } = pessoa;
const {
  endereco: { rua, numero },
} = pessoa;
const { nome: r, ...resto } = pessoa;
console.log(nome, sobrenome, endereco);
console.log(rua, numero);
console.log(r, resto);
