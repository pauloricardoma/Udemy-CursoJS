// Vieram pra resolver as árvores de natal de callback, fazer coisa assíncronas, parecer
// que acontecem de forma síncrona.
function rand(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

// resolvendo com Promises
function esperaAi(msg, tempo) {
  return new Promise((resolve, reject) => {
    if (typeof msg !== 'string') reject(new TypeError('is not a string'));
    setTimeout(() => {
      resolve(msg);
    }, tempo);
  });
}

esperaAi('Conexão com o BD', rand(1, 3))
  .then((resposta) => {
    console.log(resposta);
    return esperaAi('Buscando dados da BASE', rand(1, 3));
  })
  .then((resposta) => {
    console.log(resposta);
    return esperaAi(222222, rand(1, 3));
  })
  .then((resposta) => {
    console.log(resposta);
  })
  .then(() => {
    console.log('Exibe dados na tela');
  })
  .catch((e) => {
    console.log('ERROR: ', e); // catch recebe o erro, que seria o reject nesse caso
  });

console.log('Isso aqui será exibido antes de qualquer Promisse.');

// esperaAi('Conexão com o BD', rand(1, 3))
//   .then((resposta) => {
//     console.log(resposta);
//     return esperaAi('Buscando dados da BASE', rand(1, 3));
//   })
//   .then((resposta) => {
//     console.log(resposta);
//     return esperaAi('Tratando os dados da BASE', rand(1, 3));
//   })
//   .then((resposta) => {
//     console.log(resposta);
//   })
//   .then(() => {
//     console.log('Exibe dados na tela');
//   })
//   .catch();
// console.log('Isso aqui será exibido antes de qualquer Promisse.');

// SEM PROMISE
function esperaAi2(msg, tempo, cb) {
  setTimeout(() => {
    console.log(msg);
    if (cb) cb();
  }, tempo);
}

// esperaAi2('Frase 1', rand(1, 3), function () {
//   esperaAi2('Frase 2', rand(1, 3), function () {
//     esperaAi2('Frase 3', rand(1, 3));
//   });
// });
