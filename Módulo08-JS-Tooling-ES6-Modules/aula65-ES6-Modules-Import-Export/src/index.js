// import { nome3, sobrenome, idade, soma } from './modulo1';
// import { nome as nome2, sobrenome, idade, soma, Pessoa } from './modulo1';
// import * as MeuModulo1 from './modulo1';
// console.log(MeuModulo1);

// const nome2 = 'João';

// const p1 = new MeuModulo1.Pessoa('Paul', 'Richard');

// console.log(MeuModulo1.nome, nome2, MeuModulo1.sobrenome, MeuModulo1.idade);
// console.log(p1);
// console.log(MeuModulo1.soma(1, 3));

// agora qualquerNome seria o padrão
// import qualquerNome from './modulo1'; // já que nome está sendo exportado de modulo1 como default
// import multiplica, { nome, sobrenome, idade, soma } from './modulo1';

// console.log(qualquerNome);
// console.log(nome, sobrenome, idade, soma(5, 10));
// console.log(multiplica(5, 40));

// GERALMENTE
import Pessoa, { nome, sobrenome } from './modulo1';

const p1 = new Pessoa(nome, sobrenome);
console.log(p1);
