const db = require("../models/index");

const MovimentacaoRepository = {
  listar: async () => {
    return await db.Movimentacao.findAll();
  },

  criar: async (dados) => {
    return await db.Movimentacao.create(dados);
  },

  listarPorPeriodo: async (inicio, fim) => {
    return await db.Movimentacao.findAll({
      where: {
        data: {
          [db.Sequelize.Op.between]: [inicio, fim],
        },
      },
    });
  },
};

module.exports = MovimentacaoRepository;