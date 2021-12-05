const express = require('express');
const app = express();
//                             params?queryString -> ? usado para dizer que está iniciando uma query String
// http://facebook.com/profiles/12345?campanha=googleads&nomecampnha=seila   -> & usado para mais queryString

// para tratar o body, resposta do formulário
app.use(express.urlencoded({ extended: true }));

app.get('/', (request, response) => {
  response.send(`
  <form action="/" method="POST">
  Nome do cliente: <input type="text" name="qualquercoisa"><br>
  Outro campo: <input type="text" name="aquioutrocampo">
  <button>Enviar</button>
  </form>
  `);
});

app.get('/testes/:idUsuarios?/:parametros?', (req, res) => {
  // /profiles/3 -> req.params / partes que vem na rota do url
  // /profiles/?chave1=valor1&chave2=valor2&chave3=valor3 -> req.query
  console.log(req.params);
  console.log(req.query);
  res.send(req.query.facebookprofile);
});

app.post('/', (req, res) => {
  console.log(req.body);
  res.send(`O que você me enviou foi: ${req.body.qualquercoisa}`);
});

app.listen(3000, () => {
  console.log('Acessar http://localhost:3000');
  console.log('Servidor executando na porta 3000');
});
