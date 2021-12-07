function teste() {
  console.log(this);
}

class ControleRemoto {
  constructor(tv) {
    this.tv = tv;
    this.volume = 0;
    teste();
  }

  // Método de instância
  aumentarVolume() {
    this.volume += 2;
  }
  diminuirVolume() {
    this.volume -= 2;
  }

  // Método estático // Referente a Classe
  // Toimar cuidado que métodos estáticos não tem acesso aos dados da instância
  static trocaPilha() {
    // não consigo chamar, por não estar instânciando a classe
    // console.log(this.volume);
    console.log('OK, vou trocar.');
  }
  static soma(x, y) {
    console.log(this);
  }
}

const controle1 = new ControleRemoto('LG');
ControleRemoto.soma();
ControleRemoto.teste;
