function Calculadora() {
  const display = document.querySelector('.display');

  function inicia() {
    cliqueBotoes();
    pressionaEnter();
  }
  inicia();

  function pressionaEnter() {
    display.addEventListener('keyup', (e) => {
      if (e.keyCode === 13) {
        realizaConta();
      }
    });
  }

  function realizaConta() {
    let conta = display.value;

    try {
      conta = eval(conta);

      if (!conta) {
        alert('Conta inválida!');
        return;
      }

      display.value = String(conta);
    } catch (e) {
      alert('Conta inválida!');
    }
  }

  function clearDisplay() {
    display.value = '';
  }

  function apagaUm() {
    display.value = display.value.slice(0, -1);
  }

  function cliqueBotoes() {
    // this -> calculadora
    document.addEventListener('click', (e) => {
      const el = e.target;

      if (el.classList.contains('btn-num')) {
        btnParaDisplay(el.innerText);
      }

      if (el.classList.contains('btn-clear')) {
        clearDisplay();
      }

      if (el.classList.contains('btn-del')) {
        apagaUm();
      }

      if (el.classList.contains('btn-eq')) {
        realizaConta();
      }
    });
  }

  function btnParaDisplay(valor) {
    display.value += valor;
  }
}
