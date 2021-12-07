export const formulario = document.querySelector('.formulario');
export const divSenha = document.querySelector('.senha-gerada');
const numeros = formulario.querySelector('.numeros');
const maisculas = formulario.querySelector('.maisculas');
const minusculas = formulario.querySelector('.minusculas');
const simbolos = formulario.querySelector('.simbolos');

const geraNum = (num) => {
  return num ? String(Math.floor(Math.random() * 10)) : '';
};

const geraMaiusc = (maiusc) => {
  return maiusc
    ? Math.random()
        .toString(36)
        .replace(/[^a-z]+/g, '')
        .substr(0, 1)
        .toUpperCase()
    : '';
};

const geraMinusc = (maiusc) => {
  return maiusc
    ? Math.random()
        .toString(36)
        .replace(/[^a-z]+/g, '')
        .substr(0, 1)
        .toLowerCase()
    : '';
};

const caracteres = '/!#$%"¨&*`´~^?;:-+.,=§';
const geraSimbolos = (simb) => {
  return simb
    ? caracteres.charAt(Math.floor(Math.random() * caracteres.length))
    : '';
};

export default function geraSenha(tamanho) {
  let senhaGerada = '';
  for (let i = 0; i < tamanho; i++) {
    senhaGerada +=
      geraNum(numeros.checked) +
      geraMaiusc(maisculas.checked) +
      geraMinusc(minusculas.checked) +
      geraSimbolos(simbolos.checked);
  }
  if (tamanho > 24) {
    divSenha.classList.add('erro');
    return 'A senha precisa ter até 24 caracteres.';
  }
  if (
    numeros.checked === false &&
    maisculas.checked === false &&
    minusculas.checked === false &&
    simbolos.checked === false
  ) {
    divSenha.classList.add('erro');
    return 'Precisa selecionar alguma opção.';
  }
  divSenha.classList.remove('erro');
  return senhaGerada.slice(0, tamanho);
}
