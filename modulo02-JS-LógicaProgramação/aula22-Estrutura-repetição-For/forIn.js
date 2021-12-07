const frutas = ['Pera', 'Maça', 'Uva'];

// for (let i = 0; i < frutas.length; i++) {
//   console.log(frutas[i]);
// }

for (let index in frutas) {
  console.log(frutas[index]);
}

const pessoa = {
  nome: 'Juvenil',
  sobrenome: 'Pad',
  idade: 45,
};

for (let keys in pessoa) {
  console.log(`${keys}: ${pessoa[keys]}`);
}
