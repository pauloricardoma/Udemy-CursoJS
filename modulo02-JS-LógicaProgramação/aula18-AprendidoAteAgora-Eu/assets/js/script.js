function calcularIMC() {
  const inputPeso = document.querySelector("#peso");
  const peso = Number(inputPeso.value);
  const inputAltura = document.querySelector("#altura");
  const altura = Number(inputAltura.value);
  const mostrarResultado = document.querySelector(".resultado");
  mostrarResultado.textContent = "";
  const p = document.createElement("p");
  p.classList.add("paragrafo-resultado");
  mostrarResultado.appendChild(p);

  if (!peso || !altura) {
    p.classList.add("bad");
    p.textContent = `Peso ou altura inválido`;
    return;
  }

  let resultado = peso / (altura * altura);

  if (resultado < 18.5) {
    p.textContent = `Seu IMC é: ${resultado.toFixed(2)} (abaixo do peso)`;
  } else if (resultado <= 24.9) {
    p.textContent = `Seu IMC é: ${resultado.toFixed(2)} (peso normal)`;
  } else if (resultado <= 29.9) {
    p.textContent = `Seu IMC é: ${resultado.toFixed(2)} (sobrepeso)`;
  } else if (resultado <= 34.9) {
    p.textContent = `Seu IMC é: ${resultado.toFixed(2)} (obesidade grau 1)`;
  } else if (resultado <= 39.9) {
    p.textContent = `Seu IMC é: ${resultado.toFixed(2)} (obesidade grau 2)`;
  } else if (resultado > 40) {
    p.textContent = `Seu IMC é: ${resultado.toFixed(2)} (obesidade grau 3)`;
  }
}
