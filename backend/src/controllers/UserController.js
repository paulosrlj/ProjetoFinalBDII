import User from '../models/User';
import Student from '../models/Student';
import Curso from '../models/Curso';
import Foto from '../models/Foto';
import Post from '../models/Post';

class UserController {
  async store(req, res) {
    try {
      const { email, password, matricula } = req.body;

      const student = await Student.findOne({
        where: { matricula },
      });
      if (!student)
        return res.status(400).json({ err: 'A matrícula não existe' });

      const { id } = student;

      const user = await User.create({
        email,
        password,
        matricula,
        student_id: id,
      });

      const { id: userId } = user;

      return res.status(200).json({ userId, email, matricula });
    } catch (e) {
      return res.status(400).json({ err: 'Houve um problema' });
    }
  }

  async index(req, res) {
    try {
      const users = await User.findAll({
        attributes: ['id', 'email'],
        include: [
          {
            model: Foto,
          },
        ],
      });

      return res.status(200).json(users);
    } catch (e) {
      return res.status(400).json({ error: e });
    }
  }

  async show(req, res) {
    try {
      const user = await User.findOne({
        where: { email: req.params.email },
        attributes: ['id', 'email', 'student_id'],
        include: [
          {
            model: Student,
          },
          {
            model: Foto,
          },
        ],
      });

      if (!user) return res.status(400).json({ err: 'Usuário não encontrado' });

      const {
        email,
        Student: { nome, matricula, situacao, cota, curso_id },
        Fotos,
      } = user;

      if (Fotos.length !== 0) {
        const foto = Fotos[Fotos.length - 1];
        const { url, filename } = foto;

        const curso = await Curso.findByPk(curso_id);

        const { nome: nome_curso } = curso;

        const posts = await Post.find({ email });

        return res.status(200).json({
          nome,
          email,
          matricula,
          situacao,
          cota,
          nome_curso,
          posts,
          Foto: { url, filename },
        });
      }

      const curso = await Curso.findByPk(curso_id);

      const { nome: nome_curso } = curso;

      const posts = await Post.find({ email });

      return res.status(200).json({
        nome,
        email,
        matricula,
        situacao,
        cota,
        nome_curso,
        posts,
      });
    } catch (e) {
      return res.status(400).json({ error: e });
    }
  }

  async update(req, res) {
    try {
      const user = await User.findByPk(req.params.id);

      if (!user)
        return res.status(401).json({ errors: ['Usuário não existe'] });

      const updatedUser = await user.update(req.body);

      const { id, name, email } = updatedUser;

      return res.status(200).json({ id, name, email });
    } catch (e) {
      throw new Error(e);
    }
  }

  async delete(req, res) {
    try {
      const user = await User.findByPk(req.params.id);

      if (!user) return res.status(401).json({ error: ['Usuário não existe'] });

      await user.destroy();

      return res.status(200).json({ msg: 'Usuário deletado com sucesso.' });
    } catch (e) {
      return res.status(400).json({
        error: e.errors,
      });
    }
  }
}

export default new UserController();
