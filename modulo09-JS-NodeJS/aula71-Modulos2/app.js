// const multiplicacao = require('./mod');
// console.log(multiplicacao);

// const n = require('./mod');
// console.log(n);

// const Cachorro = require('./Z/mod2');
// const c1 = new Cachorro('Dog');
// c1.latir();

const path = require('path');
// console.log(__filename); // vai pegar o arquivo atual diretamente da raiz
console.log(__dirname); // vai pegar o diretório atual diretamente da raiz
console.log(path.resolve(__dirname, '..', '..'));
console.log(path.resolve(__dirname, '..', '..', 'arquivos', 'imagens'));

const Cachorro = require('./Z/mod2.js');
const c1 = new Cachorro('Dog');
c1.latir();
