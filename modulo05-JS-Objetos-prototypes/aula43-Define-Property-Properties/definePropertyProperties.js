// defineProperty / defineProperties
function Produto(nome, preco, estoque) {
  Object.defineProperty(this, 'estoque', {
    enumerable: true, // mostra a chave, se chamada
    value: estoque, // valor
    writable: true, // valor pode ou não ser alterado
    configurable: true, // configurável -> apagar, configurar
  });

  Object.defineProperties(this, {
    nome: {
      enumerable: true, // mostra a chave, se chamada
      value: nome, // valor
      writable: true, // valor pode ou não ser alterado
      configurable: true,
    },
    preco: {
      enumerable: true, // mostra a chave, se chamada
      value: preco, // valor
      writable: true, // valor pode ou não ser alterado
      configurable: true,
    },
  });
}
const p1 = new Produto('Camiseta', 20, 3);
console.log(p1);

for (let chave in p1) {
  console.log(chave);
}
