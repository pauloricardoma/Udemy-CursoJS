function oClock() {
  function getHourFromSeconds(seg) {
    const data = new Date(seg * 1000);
    return data.toLocaleTimeString('pt-BR', {
      hour12: false,
      timeZone: 'UTC',
    });
  }

  const clock = document.querySelector('.clock');
  let seg = 0;
  let timer;

  function playTimer() {
    timer = setInterval(() => {
      seg++;
      clock.textContent = getHourFromSeconds(seg);
    }, 1000);
  }

  document.addEventListener('click', (e) => {
    const el = e.target;

    if (el.classList.contains('play')) {
      clock.classList.add('start');
      clock.classList.remove('pausado');
      clearInterval(timer);
      playTimer();
    }
    if (el.classList.contains('pause')) {
      clock.classList.remove('start');
      clock.classList.add('pausado');
      clearInterval(timer);
    }
    if (el.classList.contains('reset')) {
      clock.classList.remove('start', 'pausado');
      clearInterval(timer);
      seg = 0;
      clock.textContent = getHourFromSeconds(seg);
    }
  });
}
oClock();
