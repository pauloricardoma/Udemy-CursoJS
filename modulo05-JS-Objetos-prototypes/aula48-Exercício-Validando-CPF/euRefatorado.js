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
let cpf3 = '618.270.800-00';
let cpf4 = '366.985.080-55';
let cpf5 = '111.111.111-11';
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

  const ehSequencia = () => cpfLimpo[0].repeat(cpfLimpo.length);
  if (ehSequencia() === cpfLimpo) return 'Entrada de CPF inválida';

  const cpfParcial = cpfLimpo.slice(0, -2);

  const calculaDig = (cpfParcial) => {
    const cpfArray = Array.from(cpfParcial);

    const total = cpfArray.reduce((ac, val, id, arr) => {
      val = Number(val) * (Number(arr.length) + 1 - Number(id));
      return (ac += val);
    }, 0);

    const calc = 11 - (Number(total) % 11);
    return calc > 9 ? '0' : String(calc);
  };

  const primeiroDigito = calculaDig(cpfParcial);
  const segundoDigito = calculaDig(cpfParcial + primeiroDigito);

  const validacao = cpfParcial + primeiroDigito + segundoDigito;

  if (cpfLimpo !== validacao) {
    return 'CPF inválido';
  }
  return 'CPF válido.';
}
const validado = validaCpf(cpf);
const validado2 = validaCpf(cpf2);
const validado3 = validaCpf(cpf3);
const validado4 = validaCpf(cpf4);
const validado5 = validaCpf(cpf5);
console.log(validado);
console.log(validado2);
console.log(validado3);
console.log(validado4);
console.log(validado5);
