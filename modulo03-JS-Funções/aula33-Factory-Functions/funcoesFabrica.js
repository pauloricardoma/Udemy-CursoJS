// Factory function (Função fábrica)
// Constructor function (Função construtora)
function criaPessoa(nome, sobrenome, altura, peso) {
  return {
    nome,
    sobrenome,

    // Getter
    get nomeCompleto() {
      return `${this.nome} ${this.sobrenome}`;
    },

    // Setter
    set nomeCompleto(valor) {
      valor = valor.split(' ');
      this.nome = valor.shift();
      this.sobrenome = valor.join(' ');
      console.log(valor);
    },

    fala(assunto = 'Maria está falando sobre NADA.') {
      return `${this.nome} está ${assunto}`;
    },

    altura: altura,
    peso: peso,

    // Getter -> finge não ser uma função, não sendo chamada p1.imc(); mas p1.imc;
    get imc() {
      const indice = this.peso / this.altura ** 2;
      return 'IMC: ' + indice.toFixed(2);
    },
  };
}

const p1 = criaPessoa('Luiz', 'Otávio', 1.8, 80);
p1.nomeCompleto = 'Maria Oliveira Silva';
console.log(p1.nomeCompleto);
console.log(p1.fala());
console.log(p1.nome);
console.log(p1.sobrenome);
console.log(p1.imc);
console.log('---------');
const p2 = criaPessoa('Maria', 'Carlota', 1.6, 220);
console.log(p2.fala('Falando sobre JS.'));
console.log(p2.imc);
console.log('---------');
const p3 = criaPessoa('Marcio', 'Martiori', 1.3, 42);
console.log(p3.imc);
