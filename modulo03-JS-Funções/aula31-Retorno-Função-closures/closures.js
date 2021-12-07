function retornaFuncao(nome) {
  return function () {
    return nome;
  };
}

const funcao = retornaFuncao('Juvenil');
const funcao2 = retornaFuncao('Padwan');
console.dir(funcao);
console.dir(funcao2);
console.log(funcao(), funcao2());
