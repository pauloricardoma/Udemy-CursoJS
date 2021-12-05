// 705.484.450-52 070.987.720-03
/*
7x  0x  5x  4x  8x  4x  4x  5x  0x
10  9   8   7   6   5   4   3   2
70  0   40  28  48  20  16  15  0 = 237

11 - (237 % 11) = 5 (Primeiro dígito)
Se o número digito for maior que 9, consideramos 0.
//--------------------------------------
7x  0x  5x  4x  8x  4x  4x  5x  0x  5x
11  10  9   8   7   6   5   4   3   2
77  0   45  32  56  24  20  20  0 10

11 - (284 % 11) = 2 (Primeiro dígito)
Se o número digito for maior que 9, consideramos 0.
//---------------------------------------
Se o CPF resultado dessa conta for igual ao original, ele é valido
705.484.450-52 === 705.484.450-52
*/
let cpf = '705.484.450-52';
let cpf2 = '070.987.720-03';
let cpf3 = '618.270.801-00';
let cpf4 = '366.985.080-55';
// -> /\D+/g -> representação de qualquer coisa que não for um número
// let cpfLimpo = cpf.replace(/\D+/g, '');
// let cpfArray = Array.from(cpfLimpo);
// console.log(cpfArray);
// console.log(cpfArray.map((el) => el));
// console.log(cpfArray.reduce((ac, val) => ac + Number(val), 0));

function validaCpf(cpf) {
  const cpfLimpo = cpf.replace(/\D+/g, '');

  if (typeof cpfLimpo === 'undefined') return 'Entrada de CPF inválida';
  if (cpfLimpo.length !== 11) return 'Entrada de CPF inválida';

  const cpfArray = Array.from(cpfLimpo);

  const primNumeros = cpfArray.slice(0, -2);
  const calcPrimeiro = primNumeros.map((val, id) => {
    val = Number(val) * (10 - Number(id));
    return val;
  });
  const totalPrimeiro = calcPrimeiro.reduce((ac, val) => {
    return (ac += val);
  }, 0);
  const calculaPrim = () => {
    let calc = 11 - (Number(totalPrimeiro) % 11);
    if (calc > 9) {
      return 0;
    }
    return calc;
  };
  const primeiroDigito = calculaPrim();

  const segNumeros = cpfArray.slice(0, -1);
  const calcSegundo = segNumeros.map((val, id) => {
    val = Number(val) * (11 - Number(id));
    return val;
  });
  const totalSegundo = calcSegundo.reduce((ac, val) => {
    return (ac += val);
  }, 0);
  const calculaSeg = () => {
    let calc = 11 - (Number(totalSegundo) % 11);
    if (calc > 9) {
      return 0;
    }
    return calc;
  };
  const segundoDigito = calculaSeg();

  const validacao = primNumeros.join('') + primeiroDigito + segundoDigito;

  if (cpfLimpo !== validacao) {
    return 'CPF inválido';
  }
  return 'CPF válido.';
}
const validado = validaCpf(cpf);
const validado2 = validaCpf(cpf2);
const validado3 = validaCpf(cpf3);
const validado4 = validaCpf(cpf4);
console.log(validado);
console.log(validado2);
console.log(validado3);
console.log(validado4);
