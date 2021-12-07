const HomeModel = require('../models/HomeModel');

// HomeModel.find()
//   .then((dados) => console.log(dados))
//   .catch((e) => console.log(e));

// HomeModel.create({
//   titulo: 'Outra coisa qualquer',
//   descricao: 'Outra descrição',
// })
//   .then((dados) => console.log(dados))
//   .catch((e) => console.log(e));

exports.paginaInicial = (req, res) => {
  res.render('index');
  return;
  // return; -> poderia colocar o return e tirar o next e finalizar
  // console.log(`Olha o que tem na req.session.nome ${req.session.nome}`);
  // next();
};

exports.trataPost = (req, res) => {
  res.send(req.body);
  return;
};
