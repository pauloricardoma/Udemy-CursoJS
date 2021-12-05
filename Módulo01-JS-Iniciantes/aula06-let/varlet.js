let nome; // Declarou a variável
nome = "Paulo"; // Inicializando a variável
console.log(nome);
nome = "Ricardo";
console.log(nome);

// Não podemos criar variáveis com palavras reservadas
// Variáveis precisam ter nomes significativos
let nomeCliente = "João";
console.log(nomeCliente);

// Não pode começar o nome de uma variável com um número
// Não podem conter espaços ou traços
// Utilizamos camelCase
let nomeCompletoDoCliente = "Paulo Richard";
console.log(nomeCompletoDoCliente);

// Case-sensitive
// Não podemos redeclarar variáveis com let
// NÃO UTILIZE VAR, UTILIZE LET.
let nomeCliente = "Paulo";
let nomecliente = "Ricardo";

console.log(nomeCliente, nomecliente);
