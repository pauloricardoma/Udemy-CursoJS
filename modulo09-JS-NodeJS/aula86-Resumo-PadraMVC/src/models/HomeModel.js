// TRabalha com o modelamento de dados, tudo relacionado a Base de Dados

const mongoose = require('mongoose');

const HomeSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  descricao: String,
});

const HomeModel = mongoose.model('Home', HomeSchema);

class Home {}

module.exports = Home;
