/*
const array = [1, 2, 3]; // no 'const' não é possível atribuir valor a variável, porém ao array sim
array.push(4);
array[0] = "Luiz";
array = "Outra"; // erro ao tentar atribuir
console.log(array);

// PARA CRIAR ARRAY UTILIZO CHAVES '[]' PARA CRIAR OBJETO UTILIZO COLCHETES '{}'
const nome01 = "Luiz";
const sobrenome01 = "Miranda";
const idade01 = 25;

// objeto literal // crio atributos dentro com valores
const pessoa1 = {
  nome: "Luiz",
  sobrenome: "Miranda",
  idade: 25,
};

console.log(pessoa1.nome);
console.log(pessoa1.sobrenome);
console.log(pessoa1.idade);
*/
/*

// o que a função recebe seria o parâmetro // essa função a seguir cria objetos
function criaPessoa(nome, sobrenome, idade) {
  return {
    nome: nome,
    sobrenome: sobrenome,
    idade: idade,
  };
}

// ESCRITO DE MELHOR FORMA
function criaPessoa(nome, sobrenome, idade) {
  return { nome, sobrenome, idade };
}

// e aqui enviamos o argumento para a função // arugmento é o valor que é passado para o parâmetro
const pessoa1 = criaPessoa("Luiz", "Otávio", 25);
const pessoa2 = criaPessoa("Maria", "Oliveira", 32);
const pessoa3 = criaPessoa("João", "Moreira", 55);
const pessoa4 = criaPessoa("Junior", "Lara", 44);
const pessoa5 = criaPessoa("Jean", "Miranda", 69);
console.log(pessoa1.nome, pessoa2.sobrenome, pessoa5.idade);
*/

const pessoa1 = {
  nome: "Luiz",
  sobrenome: "Miranda",
  idade: 25,

  // para criar função dentro da função, não é necessário 'function'
  fala() {
    console.log(`${this.nome} ${this.sobrenome} está falando oi...`); // this dentro desse contexto, this representa o objeto pessoa1
  },
  fala2() {
    console.log(`A minha idade atual é ${this.idade}.`);
  },
  // sempre que chamar esse método, a idade será incrementada
  incrementaIdade() {
    this.idade++;
  },
};

pessoa1.fala2();
pessoa1.incrementaIdade();
pessoa1.fala2();
pessoa1.incrementaIdade();
pessoa1.fala2();
pessoa1.incrementaIdade();
pessoa1.fala2();
