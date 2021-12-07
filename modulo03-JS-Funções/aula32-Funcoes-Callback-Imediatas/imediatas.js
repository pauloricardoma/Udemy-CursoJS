// IIFE -> Immediately invoked function expression
(function (idade, peso, altura) {
  const sobrenome = 'Padwan';
  function criaNome(nome) {
    return nome + ' ' + sobrenome;
  }

  function falaNome() {
    console.log(criaNome('Juvenil'));
  }
  falaNome();

  console.log(idade, peso, altura);
})(40, 90, 1.4);

const nome = 'Qualquer coisa';
