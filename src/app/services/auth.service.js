require('dotenv').config();

const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const authRepository = require("../repositories/auth.repository");

const SECRET = process.env.JWT_SECRET;  
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN;  

const AuthService = {
  registrar: async ({ nomeusuario, senha }) => {
    try {
      const existente = await authRepository.buscarPorNome(nomeusuario);
      if (existente) throw new Error("Usuário já existe");

      const hash = await bcrypt.hash(senha, 10);
      
      const novoUsuario = await authRepository.criarUsuario({ nomeusuario, senha: hash });
      
      return novoUsuario;
    } catch (error) {
      throw new Error(`Erro ao registrar usuário: ${error.message}`);
    }
  },

  autenticar: async ({ nomeusuario, senha }) => {
    try {
      const usuario = await authRepository.buscarPorNome(nomeusuario);
      if (!usuario) throw new Error("Usuário não encontrado");

      const senhaValida = await bcrypt.compare(senha, usuario.senha);
      if (!senhaValida) throw new Error("Senha inválida");

      const token = jwt.sign({ id: usuario.codigousuario }, SECRET, { expiresIn: JWT_EXPIRES_IN });

      return { token };
    } catch (error) {
      throw new Error(`Erro ao autenticar: ${error.message}`);
    }
  },
};

module.exports = AuthService;