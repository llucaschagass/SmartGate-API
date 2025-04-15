const authService = require("../services/auth.service");

const AuthController = {
  register: async (req, res) => {
    try {
      const { nomeusuario, senha } = req.body;
      await authService.registrar({ nomeusuario, senha });
      res.status(201).json({ message: "Usuário registrado com sucesso!" });
    } catch (error) {
      res.status(400).json({ error: error.message || "Erro ao registrar usuário" });
    }
  },

  login: async (req, res) => {
    try {
      const { nomeusuario, senha } = req.body;
      const { token, usuario } = await authService.autenticar({ nomeusuario, senha });
      res.status(200).json({
        message: "Login realizado com sucesso!",
        token,
        usuario: { id: usuario.codigousuario, nome: usuario.nomeusuario },
      });
    } catch (error) {
      res.status(401).json({ error: error.message || "Erro ao realizar login" });
    }
  },
};

module.exports = AuthController;