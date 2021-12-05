const fs = require('fs').promises;

module.exports = (caminho, dados) => {
  // -------------------------------------- / flag: 'w' -> escrever / 'a' -> append-adicionar
  fs.writeFile(caminho, dados, { flag: 'w' }); // encoding por padrão envia 'utf8'
};
