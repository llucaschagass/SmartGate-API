const db = require("../models/index");

const VeiculoRepository = {
  listar: async () => {
    return await db.Veiculo.findAll();
  },

  buscarPorPlaca: async (placa) => {
    return await db.Veiculo.findOne({ where: { placa } });
  },

  buscarPorId: async (id) => {
    return await db.Veiculo.findByPk(id);
  },

  criar: async (dados) => {
    return await db.Veiculo.create(dados);
  },
};

module.exports = VeiculoRepository;