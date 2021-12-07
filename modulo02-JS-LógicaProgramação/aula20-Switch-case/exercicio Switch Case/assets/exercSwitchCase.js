const h1 = document.querySelector('.container h1');
const btn = document.querySelector('button');

function dataHora() {
  const data = new Date();
  const dataBrasil = data.toLocaleTimeString('pt-BR', {
    weekday: 'long',
    year: 'numeric',
    day: 'numeric',
    month: 'long',
    hour: '2-digit',
    minute: '2-digit',
  });
  // const dataBrasil = data.toLocaleString('pt-BR', {
  //   dateStyle: 'full',
  //   timeStyle: 'short',
  // });
  h1.innerHTML = dataBrasil;
}

btn.addEventListener('click', dataHora);
