const pessoa = {
  nome: 'Luiz',
  sobrenome: 'Otávio',
};
const chave = 'nome';
// console.log(pessoa.nome);
// console.log(pessoa[chave]);
// console.log(pessoa['nome']);

const pessoa1 = new Object();
pessoa1.nome = 'Luiz';
pessoa1.sobrenome = 'Otávio';
pessoa1.idade = 32;
pessoa1.falarNome = function () {
  return `${this.nome} está falando seu nome.`;
};
pessoa1.getDataNascimento = function () {
  const dataAtual = new Date();
  return dataAtual.getFullYear() - this.idade;
};

// for (let chave in pessoa1) {
//   // console.log(chave);
//   // console.log(pessoa1[chave]);
// }

// Factory functions / Constructor functions / Classes
function criaPessoa(nome, sobrenome) {
  return {
    nome,
    sobrenome,
    get nomeCompleto() {
      return `${this.nome} ${this.sobrenome}`;
    },
  };
}
const p1 = criaPessoa('Luiz', 'Otávio');
// console.log(p1);

function Pessoa(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;
  this.nomeCompleto = `${nome} ${sobrenome}`;
  // return
  Object.freeze(this); // não posso alterar mais nada no objeto
}
// a palavra new
// {} <- this -> this / cria novo objeto e atrela a palavra this a este objeto e retorna esse this
// p2 = (endereçoDeMemória) -> 'Valor'
// p2.endereçoDeMemória = {nome: 'Outra coisa'} não estou alterando o endereço de memória, somente o valor
// p2 = (novoEndereçoMemória) não posso
const p2 = new Pessoa('Luiz', 'Miranda');
Object.freeze(p2); // trava objeto, nada pode ser alterado
p2.nome = 'Outra coisa';
const p3 = new Pessoa('Maria', 'Miranda');
const p4 = new Pessoa('Dona', 'Maria');
console.log(p2);
console.log(p3);
console.log(p4);
