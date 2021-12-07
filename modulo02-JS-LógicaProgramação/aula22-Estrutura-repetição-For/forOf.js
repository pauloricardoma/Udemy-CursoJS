const nomes = ['Juvenil', 'Pereira', 'Oliveira'];

for (let i = 0; i < nomes.length; i++) {
  console.log(nomes[i]);
}

console.log(' ');

for (let index in nomes) {
  console.log(nomes[index]);
}

console.log(' ');

for (let valor of nomes) {
  console.log(valor);
}

console.log(' ');

nomes.forEach(function (el, index, arr) {
  console.log(el, index, arr);
});

// For Clássico - Geralmente com iteráveis (array ou strings)
// For in - Retorna o índice ou chave (string, array ou objetos)
// For of - Retorna o valor em si (iteráveis, arrays ou strings)
console.log(' ');

const pessoa = {
  nome: 'Luiz',
  sobrenome: 'Pad',
};

for (let index in pessoa) {
  console.log(pessoa[index]);
}
