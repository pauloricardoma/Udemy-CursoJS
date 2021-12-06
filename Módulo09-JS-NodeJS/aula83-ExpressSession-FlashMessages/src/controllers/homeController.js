exports.paginaInicial = (req, res) => {
  // req.flash('info', 'Olá mundo!');
  // req.flash('error', 'sadsadlasld!');
  // req.flash('sucess', 'Blaaaaaaaaaaaaaaaaaaaaa');
  // console.log(req.flash('error'), req.flash('sucess'), req.flash('info'));

  // req.session.usuario = { nome: 'Luiz', logado: true };
  // console.log(req.session.usuario);
  res.render('index');
  return;
};

exports.trataPost = (req, res) => {
  res.send(req.body);
  return;
};
