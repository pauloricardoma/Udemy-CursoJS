const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let numero of numeros) {
  if (numero === 2) {
    console.log('pulei o numero 2');
    continue;
  } else if (numero === 6) {
    console.log('6 encontrado, fechando...');
    break;
  }
  console.log(numero);
}
for (let i in numeros) {
  let numero = numeros[i];

  if (numero === 2) {
    console.log('pulei o numero 2');
    continue;
  } else if (numero === 6) {
    console.log('6 encontrado, fechando...');
    break;
  }
  console.log(numero);
}
for (let i = 0; i < numeros.length; i++) {
  let numero = numeros[i];
  if (numero === 2) {
    console.log('pulei o numero 2');
    continue;
  } else if (numero === 6) {
    console.log('6 encontrado, fechando...');
    break;
  }
  console.log(numero);
}
