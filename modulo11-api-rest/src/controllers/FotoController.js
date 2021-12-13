import multer from 'multer';
import multerConfig from '../config/multerConfig';

import Foto from '../models/Foto';
import Aluno from '../models/Aluno';

const upload = multer(multerConfig).single('foto');

class FotoController {
  store(req, res) {
    return upload(req, res, async (error) => {
      if (error) {
        return res.status(400).json({
          errrors: [error.code],
        });
      }

      try {
        const { originalname, filename } = req.file;
        const { aluno_id } = req.body;
        const { nome: relacionadoAluno } = await Aluno.findByPk(aluno_id);
        const foto = await Foto.create({ originalname, filename, aluno_id });

        const { originalname: name, filename: file } = foto;
        return res.json({ relacionadoAluno, name, file });
      } catch (e) {
        return res.status(400).json({
          errors: ['Aluno não existe'],
        });
      }
    });
  }
}

export default new FotoController();
