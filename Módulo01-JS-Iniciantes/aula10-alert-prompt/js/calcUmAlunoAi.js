let num_1 = Number(prompt("digite um número"));

let num_2 = Number(prompt("digite outro número"));

let operador = prompt("Qual operador você quer usar?");

switch (operador) {
  case "+":
    alert(num_1 + num_2);
    break;
  case "-":
    alert(num_1 - num_2);
    break;
  case "*":
    alert(num_1 * num_2);
    break;
  case "/":
    alert(num_1 / num_2);
    break;
}
