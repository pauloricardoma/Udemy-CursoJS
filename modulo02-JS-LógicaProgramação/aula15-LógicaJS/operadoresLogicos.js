/*
Operadores Lógicos
&& -> AND -> E
|| -> OR -> OU
! -> NOT -> NÃO
*/
const expressaoAnd = true && true && false;
console.log(true && true && true); // todas as expressões precisam ser true, para retornar true
console.log(expressaoAnd); // por uma ser false, restorna false
//
const expressaoOr = true || false;
console.log(expressaoOr); // retorna true, por aceitar tanto true or false
console.log(false || false || false); // somente retorna false, se todas retornarem false
//
// supondo vindas da base de dados
const usuario = "Luiz";
const senha = "123456";
//                      True                True
const vaiLogar = usuario === "Luiz" && senha === "123456";
console.log(vaiLogar); // retorna true
//
// negação inverte uma expressão
console.log(true); // retorna true
console.log(!true); // negando o true, retorna false
console.log(!false); // negando o false, retorna true
