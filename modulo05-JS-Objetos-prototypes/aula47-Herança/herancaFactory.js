// Segundo obj da cadeia de protótipos
const prototypeObj2 = {
  sayNameAndHello() {
    return `${this.name} is saying hello`;
  },
};

// Primeiro obj da cadeia de protótipos
const prototypeObj1 = Object.create(prototypeObj2);
// Obs:
// Object.create cria um objeto vazio
// Tendo o objeto do parâmetro como prototype

Object.assign(prototypeObj1, {
  name: 'I HAVE NO NAME',
  sayName() {
    return this.name;
  },
});
// Obs:
// Object.assign as propriedades do segundo argumento
// Ao objeto do primeiro argumento

function factoryFunction(name) {
  // theObject entra na cadeia de protótipos
  // Porque estou criando este objeto tendo
  // o prototypeObj1 como seu prototype
  // Qualquer método que eu chamar, que não exista em theObject
  // vai fazer a engine do JS checar a cadeia de protótipos
  const theObject = Object.create(prototypeObj1);
  theObject.name = name;
  return theObject;
}

// Testando tudo
const obj1 = factoryFunction('Luiz');
const obj2 = factoryFunction('Maria');
const obj3 = factoryFunction('Helena');

// Método do primeiro objeto da cadeia de protótipos
// sayName não existe no objeto, então a engine do JS
// vai conferir a cadeia de protótipos.
// O método existe no primeiro objeto da cadeia, então executa
console.log(obj1.sayName()); // Luiz
console.log(obj2.sayName()); // Maria
console.log(obj3.sayName()); // Helena

// Método do segundo objeto da cadeia de protótipos
// sayNameAndHello não existe no objeto, então a engine do JS
// vai conferir a cadeia de protótipos.
// O método não existe no primeiro objeto da cadeia, então continua checando
// a cadeia.
// O método existe no segundo objeto da cadeia, então executa.
console.log(obj1.sayNameAndHello()); // Luiz is saying hello
console.log(obj2.sayNameAndHello()); // Maria is saying hello
console.log(obj3.sayNameAndHello()); // Helena is saying hello

// Se chamar um método que não existe dentro da cadeia, verá o erro:
// obj1.thisMethodDoesntExist(); // TypeError: obj1.thisMethodDoesntExist is not a function
