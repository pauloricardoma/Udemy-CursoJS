/*
Entre 0 - 11 - Bom dia
Entre 12 - 17 - Boa tarde
Entre 18 - 23 - Boa noite
*/
//
// if pode ser usado sozinho
// else if não pode ser utilizado só, necessita de um if antes
// else if pode ser usado várias vezes na checagem
// só pode existir um else na checagem
// pode ser utilizado somente if e else
//
const hora = 50;

if (hora >= 0 && hora < 12) {
  console.log("Bom dia");
} else if (hora >= 12 && hora < 18) {
  console.log("Boa tarde");
} else if (hora >= 18 && hora < 0) {
  console.log("Boa noite");
} else {
  console.log("Hora está errada");
}
//
const tenhoGrana = true;

if (tenhoGrana) {
  console.log("Vou sair de casa");
} else {
  console.log("Não vou sair de casa");
}
