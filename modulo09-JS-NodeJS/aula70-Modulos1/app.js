// const mod1 = require('./mod1');

// const mod1 = require('./mod1');
// console.log(mod1.falaNome());

// const falaNome = require('./mod1').falaNome;
// console.log(falaNome());

// const mod1 = require('./mod1');
// const falaNome = mod1.falaNome;
// console.log(falaNome());

// const { NOME, sobrenome, falaNome } = require('./mod1');
// console.log(NOME, sobrenome);
// console.log(falaNome());

const path = require('path');
const axios = require('axios');
const { Pessoa } = require('./mod1');
const mod1 = require('./mod1');

axios('http://www.otaviomiranda.com.br/files/json/pessoas.json')
  .then((response) => console.log())
  .catch((e) => console.log(e));

const p1 = new Pessoa('João');
console.log(mod1);
console.log(p1);
