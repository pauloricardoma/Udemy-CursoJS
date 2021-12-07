function rand(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof msg !== 'string') {
        reject('CAI NO ERRO');
        return;
      }

      resolve(msg.toUpperCase() + ' - Passei na promise');
    }, tempo);
  });
}

// Promise.all / Promise.race / Promise.resolve / Promise.reject

// Pomise.all -> só retorna resolve, quando todas as promises são resolvidas
// const promises = [
//   'Primeiro valor',
//   esperaAi('Promise 1', 3000),
//   esperaAi('Promise 2', 500),
//   esperaAi('Promise 3', 1000),
//   // esperaAi(1000, 1000),
//   'Outro valor',
// ];

// Promise.all(promises)
//   .then(function (valor) {
//     console.log(valor);
//   })
//   .catch(function (erro) {
//     console.log(erro);
//   });

// Promise.race -> sempre entrega o primeiro valor resolvido
// const promises = [
//   esperaAi('Promise 1', rand(1, 5)),
//   esperaAi('Promise 2', rand(1, 5)),
//   esperaAi('Promise 3', rand(1, 5)),
//   esperaAi(1000, rand(1, 5)),
// ];

// Promise.race(promises)
//   .then(function (valor) {
//     console.log(valor);
//   })
//   .catch(function (erro) {
//     console.log(erro);
//   });

// Promise.resolve / Promise.reject -> usado para já retornar uma promise resolvida ou já rejeitada
function baixaPagina() {
  const emCache = true;

  if (emCache) {
    return Promise.reject('Página em cache'); // cai direto no catch
  } else {
    return esperaAi('Baixei a página', 3000);
  }
}

baixaPagina()
  .then((dadosPagina) => {
    console.log(dadosPagina);
  })
  .catch((e) => console.log('Erro', e));
