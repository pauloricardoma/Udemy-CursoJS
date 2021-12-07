import geraSenha, { formulario, divSenha } from './modules/geraSenha';

import './assets/css/style.css';

const btn = formulario.querySelector('.gerar-senha');
const quantiaCaracteres = formulario.querySelector('.quantia-caracteres');

btn.addEventListener('click', (e) => {
  e.preventDefault();
  divSenha.innerHTML = geraSenha(Number(quantiaCaracteres.value));
});
