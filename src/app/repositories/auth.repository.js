const db = require("../models/index");

const AuthRepository = {
  criarUsuario: async (dados) => {
    return await db.Usuario.create(dados);
  },

  buscarPorNome: async (nomeusuario) => {
    return await db.Usuario.findOne({ where: { nomeusuario } });
  },
};

module.exports = AuthRepository;