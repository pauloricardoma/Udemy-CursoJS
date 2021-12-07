// let numero = prompt("Digite um número:");
// numero = Number(numero); // existe um jeito melhor
const numero = Number(prompt("Digite um número:")); // transforma o String recebi em Number
const numeroTitulo = document.getElementById("numero_titulo");
const texto = document.getElementById("texto");

numeroTitulo.innerHTML = numero;
texto.innerHTML = `<p>Raiz quadrada: ${numero ** 0.5}.</p>;
                    <p>${numero} é inteiro: ${Number.isInteger(numero)}.</p>
                    <p>É NaN: ${Number.isNaN(numero)}.</p>
                    <p>Arredondando para baixo: ${Math.floor(numero)}.</p>
                    <p>Arredondando para cima: ${Math.ceil(numero)}.</p>
                    <p>Com duas casa decimais: ${numero.toFixed(2)}.</p>`;
