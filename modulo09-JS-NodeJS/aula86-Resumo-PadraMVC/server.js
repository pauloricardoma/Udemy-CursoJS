// dotenv referente as variaveis de ambiente de desenvolvimento que estao configuradas no arquivo .env
// como senhas, emails, que nao serão enviados para produção .env esta em gitignore para não ser enviado
// na produção se cria um arquivo .env com os dados corretos do servidor que foi enviado
require('dotenv').config();
// usado para a criação
const express = require('express');
const app = express();
const mongoose = require('mongoose');
// o que vai modelar, garantir que os dados salvos na BD é do modo que queremos salvar
// para isso é criado um Schema que fala como os dados devem ser salvos na tabela no BD
// mongoose é bastante utilizado na BD. Ele retorna um Promise, aqui quando estivermos
// conectados o aplicativo vai emitir um evento, falando que o mongoose está conectado
mongoose
  .connect(process.env.CONNECTIONSTRING)
  .then(() => {
    app.emit('pronto');
  })
  .catch(e => console.log(e));
// session vai identificar um navegador do cliente, vai salvar um cookie no navegador do cliente com as
// informações da sessão do mesmo
const session = require('express-session');
// MongoStore falar que a sessão será slva dentro da BD
const MongoStore = require('connect-mongo');
// Para flash messages, mensagens autodestrutivas, assim que for lida, ela se apaga, salvas em sessão
const flash = require('connect-flash');
// Rota da nossa aplicação '/', '/home', '/contatos'
const routes = require('./routes');
// caminho
const path = require('path');

// Helmet é para segurança da aplicação, caso ainda esteja com um sistema em desenvolvimento usando
// 'localhost', '127.0.0.1' ou server IP externo, sem usar SSL(Https), é recomendado desativá-lo
// ele pode bloquear importação e scripts e arquivos CSS. Isso só ocorre em sistemas sem SSL (sem https na URL.)
// Usado para deixar nossa aplicação mais segura
const helmet = require('helmet');
// csrf Tokens, criados para formulários, questão de segurança, nenhum site ou aplicativo externo
// consiga postar coisas para a nossa aplicação por meio dos forms
const csrf = require('csurf');
// Nosso middleware, funções executadas nas rotas, cadeia
const {
  middlewareGlobal,
  checkCsrfError,
  csrfMiddleware,
} = require('./src/middleware/middleware');
// Aqui utilizamos o Helmet
app.use(helmet());
// Diz que pode postar formulários para dentro da aplicação
app.use(express.urlencoded({ extended: true }));
// Também utilizado para aceitar formulários na aplicação
app.use(express.json());
// para arquivos estáticos serem acessados diretamentes na aplicação
// acessar os scripts, CSS, na pasta public por exemplo
app.use(express.static(path.resolve(__dirname, 'public')));
// Configurações de sessão
const sessionOptions = session({
  secret: 'keycode board cat 12345 hahaha',
  store: MongoStore.create({ mongoUrl: process.env.CONNECTIONSTRING }),
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7,
    httpOnly: true,
  },
});
// Usa das configurações de sessões
app.use(sessionOptions);
// Uso das flash messages
app.use(flash());
// Arquivos renderizados na tela e o caminho deles
app.set('views', path.resolve(__dirname, 'src', 'views'));
// Engine utilizada para renderizar o HTML, existem outras engines, que não o ejs
app.set('view engine', 'ejs');
// Configurando csrfToken
app.use(csrf());
// Nossos próprios middlewares
app.use(middlewareGlobal);
// se enviássemos uma rota, a variavel do middleware só estaria diponível na rota
// app.use('/ahuheuaheu', middlewareGlobal);
app.use(checkCsrfError);
app.use(csrfMiddleware);
// Chamando as rotas
app.use(routes);
// Mandando a aplicação escutar
// Ao receber o evento emit, lançado pelo mongoose, podemos começar a escutar, e ouvir requisições
app.on('pronto', () => {
  app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando na porta 3000');
  });
});
