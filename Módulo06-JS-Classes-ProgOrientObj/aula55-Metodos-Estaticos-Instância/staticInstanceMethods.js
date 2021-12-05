class ControleRemoto {
  constructor(tv) {
    this.tv = tv;
    this.volume = 0;
  }

  // Método de instância
  aumentarVolume() {
    this.volume += 2;
  }
  diminuirVolume() {
    this.volume -= 2;
  }

  // Método estático // Referente a Classe
  // Tomar cuidado que métodos estáticos não tem acesso aos dados da instância
  static trocaPilha() {
    // não consigo chamar, por não estar instânciando a classe
    // console.log(this.volume);
    console.log('OK, vou trocar.');
  }
  static soma(x, y) {
    return x + y;
  }
}

const controle1 = new ControleRemoto('LG');
const controle2 = new ControleRemoto('Samsung');
controle1.aumentarVolume();
controle1.aumentarVolume();
controle1.aumentarVolume();
controle2.aumentarVolume();
console.log(controle1);
console.log(controle2);

// controle1.trocaPilha(); // não consigo chamar o método, por ser estático
ControleRemoto.trocaPilha(); // assim consigo chamar, por não estar preso a instância
console.log(Math.random()); // Math seria uma classe, chamando o método estático random, sem dados de instância

console.log(ControleRemoto.soma(2, 4));
