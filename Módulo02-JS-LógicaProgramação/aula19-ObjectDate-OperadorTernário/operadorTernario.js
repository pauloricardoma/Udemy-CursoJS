// ternario       ? :       seria um  ? (if) e  : (else)
// (condicao) ? 'Valor para verdadeiro' : 'Valor para falso';
const pontuacaoUsuario = 500;

if (pontuacaoUsuario >= 1000) {
  console.log('Usuario VIP');
} else {
  console.log('Usuario normal');
}

const usuario = pontuacaoUsuario >= 1000 ? 'Usuario VIP' : 'Usuario normal';

const corUsuario = 'Pink';
const corPadrao = corUsuario || 'Preta';

console.log(usuario, corPadrao);
