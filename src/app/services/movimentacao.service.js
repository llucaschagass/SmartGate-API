const movimentacaoRepository = require("../repositories/movimentacao.repository");

const MovimentacaoService = {
  listar: async () => {
    return await movimentacaoRepository.listar();
  },

  criar: async (dados) => {
    return await movimentacaoRepository.criar(dados);
  },

  listarPorPeriodo: async (inicio, fim) => {
    return await movimentacaoRepository.listarPorPeriodo(inicio, fim);
  },
};

module.exports = MovimentacaoService;