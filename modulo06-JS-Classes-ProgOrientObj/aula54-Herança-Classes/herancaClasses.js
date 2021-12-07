class DispositivoEletronico {
  constructor(nome) {
    this.nome = nome;
    this.ligado = false;
  }

  ligar() {
    if (this.ligado) {
      console.log(this.nome + ' já ligado');
      return;
    }
    this.ligado = true;
  }

  desligar() {
    if (!this.ligado) {
      console.log(this.nome + ' já desligado');
      return;
    }
    this.ligado = false;
  }
}

// Se criarmos só o extends a classe aceita o pai
// criando o constructor na classe filha, precisamos do super pra pegar da classe pai
class Smartphone extends DispositivoEletronico {
  constructor(nome, cor, modelo) {
    super(nome);

    this.cor = cor;
    this.modelo = modelo;
  }
}

class Tablet extends DispositivoEletronico {
  constructor(nome, temWifi) {
    super(nome);
    this.temWifi = temWifi;
  }

  ligar() {
    console.log('Olha, você alterou o método ligar.');
  }

  get falaOi() {
    console.log('Oi');
  }
}

const s1 = new Smartphone('Samsung', 'Preto', 'Galaxy S10');
const t1 = new Tablet('iPad', true);

s1.ligar();
t1.ligar();
console.log(s1);
console.log(t1);
console.log(t1.falaOi);
