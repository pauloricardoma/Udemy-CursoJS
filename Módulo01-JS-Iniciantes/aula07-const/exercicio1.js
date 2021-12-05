/*
Luiz Otávo Mirando tem 30 anos, pesa 84kg
tem 1.8 de altura e seu IMC é de 25.925925925925924
Luiz Otávio nasceu em 1980
*/
const nome = "Paulo Ricardo";
const sobrenome = "Marques";
const idade = 32;
const peso = 71;
const alturaEmM = 1.62;
let indiceMassaCorporal; // peso / (altura * altura)
let anoNascimento;
indiceMassaCorporal = peso / (alturaEmM * alturaEmM);
anoNascimento = 2021 - idade;

// template strings
console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso}kg
tem ${alturaEmM} de altura e seu IMC é de ${indiceMassaCorporal}
${nome} nasceu em ${anoNascimento}`);
