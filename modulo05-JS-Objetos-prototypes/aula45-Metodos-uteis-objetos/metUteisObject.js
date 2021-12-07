/*
Object.values
Object.entries
Object.assign(des, any)
Object.getOwnPropertyDescriptor(o, 'prop')
... (spread)

// Já vimos
Object.keys (retorna as chaves)
Object.freeze (congela o objeto)
Object.defineProperties (define várias propriedades)
Object.defineProperty (define uma propriedade)
*/
const produto = { nome: 'Produto', preco: 1.8, material: 'porcelana' };
Object.defineProperty(produto, 'nome', {
  writable: false,
  configurable: false,
  value: 'Qualquer outra coisa.',
});
// console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));
// delete produto.preco;
// console.log(Object.values(produto)); // mostra só os valores
console.log(Object.entries(produto)); // mostra um array com a entrada
for (let entry of Object.entries(produto)) {
  console.log(entry);
}
for (let [chave, valor] of Object.entries(produto)) {
  console.log(chave, valor);
}

// const caneca = {
//   ...produto,
//   material: 'porcelana',
// };
// const caneca = Object.assign({}, produto, { material: 'porcelana' }); // spread mais prático

const caneca = { nome: produto.nome, preco: produto.preco };
// console.log(Object.keys(produto)); // mostrar as chaves
// Object.freeze(produto); // impede a alteração do produto

caneca.nome = 'Caneca';
caneca.preco = 2.5;
// console.log(produto);
// console.log(caneca);
