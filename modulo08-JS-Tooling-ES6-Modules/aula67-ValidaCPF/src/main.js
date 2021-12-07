import GeraCPF from './modules/GeraCPF';

import './assets/css/style.css';
import ValidaCPF from './modules/ValidaCPF';

document.addEventListener('click', (e) => {
  const el = e.target;
  if (el.classList.contains('gerar')) {
    gerarCPF();
  }
  if (el.classList.contains('validar')) {
    const cpfText = document.querySelector('.cpf-validado');
    const resultCpf = document.querySelector('.resultado-cpf');

    const cpfValida = new ValidaCPF(cpfText.value).valida();
    resultCpf.textContent = cpfValida;
    validoInvalido(cpfValida, resultCpf);
  }
});

function validoInvalido(bool, result) {
  if (bool) {
    result.classList.add('valido');
    result.classList.remove('invalido');
    result.textContent = 'CPF Válido.';
    return;
  }
  result.classList.add('invalido');
  result.classList.remove('valido');
  result.textContent = 'CPF Inválido.';
  return;
}

function gerarCPF() {
  const gera = new GeraCPF();
  const cpfGerado = document.querySelector('.cpf-gerado');
  cpfGerado.innerHTML = gera.geraNovoCpf();
}
