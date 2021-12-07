/*
&& -> false && true -> false  --  avaliacao de curto-circuito, apartir do momento que encontro false, retorna o valor false
|| -> true || false -> vai retornar o valor verdadeiro, o valor real

FALSY(valores que avaliam em false quando necessário)
false -> valor literal false
0
'' "" ``
null / undefined
NaN
*/
function falaOi() {
  return "Oi";
}

const vaiExecutar = "Joãozinho";
console.log(vaiExecutar && falaOi());
//
console.log(0 || false || null || "Luiz Otávio" || true); // retorna o primeiro valor verdadeiro
//
const corUsuario = "vermelho";
const corPadrao = corUsuario || "preto";

console.log(corPadrao);
//
const a = 0;
const b = null;
const c = "false"; // seria avaliado em verdadeiro, é um string
const d = false;
const e = NaN;

console.log(a || b || "Joãozinho" || c || d || e); // retorna 'Joãozinho' primeiro verdadeiro
