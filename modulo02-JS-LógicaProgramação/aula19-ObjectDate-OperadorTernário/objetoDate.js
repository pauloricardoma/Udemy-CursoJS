// date global reference javaScript

const tresHoras = 60 * 60 * 3 * 1000;
const umDia = 60 * 60 * 24 * 1000;
const data = new Date(0 + tresHoras + umDia); // 01/01/1970 Timestamp unix ou época unix
console.log(data.toString());

const data1 = new Date();
console.log(data1.toString());

const data2 = new Date(2019, 3, 20, 15, 14); // a, m, d, h, M, s, ms // mês começa do 0, então janeiro = 0, abril = 3
console.log(data2.toString());

const data3 = new Date('2019-04-20 20:10:59.500');
console.log(data3.toString());
console.log('Dia ' + data3.getDate());
console.log('Mês ' + data3.getMonth());
console.log('Ano ' + data3.getFullYear());
console.log('Hora ' + data3.getHours());
console.log('Min ' + data3.getMinutes());
console.log('Seg ' + data3.getSeconds());
console.log('Ms ' + data3.getMilliseconds());
console.log('Dia semana ' + data3.getDay()); // 0 - domingo, 6 - sábado

console.log(Date.now());
const data4 = new Date(1637445220159);
console.log(data4.toString());
//
function zeroAEsquerda(num) {
  return num >= 10 ? num : `0${num}`;
}

function formataData(data) {
  const dia = zeroAEsquerda(data.getDate());
  const ano = zeroAEsquerda(data.getFullYear());
  const mes = zeroAEsquerda(data.getMonth() + 1);
  const hora = zeroAEsquerda(data.getHours());
  const min = zeroAEsquerda(data.getMinutes());
  const seg = zeroAEsquerda(data.getSeconds());

  return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;
}

const data5 = new Date();
const dataBrasil = formataData(data5);
console.log(dataBrasil);
