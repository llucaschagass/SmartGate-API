const movimentacaoService = require("../services/movimentacao.service");

const MovimentacaoController = {
  listar: async (req, res) => {
    try {
      const movimentacoes = await movimentacaoService.listar();
      res.json(movimentacoes);
    } catch (error) {
      res.status(500).json({ error: "Erro ao listar movimentações" });
    }
  },

  criar: async (req, res) => {
    try {
      const novaMovimentacao = await movimentacaoService.criar(req.body);
      res.status(201).json(novaMovimentacao);
    } catch (error) {
      res.status(500).json({ error: "Erro ao criar movimentação" });
    }
  },

  listarPorPeriodo: async (req, res) => {
    try {
      const { inicio, fim } = req.query;
      if (!inicio || !fim) {
        return res.status(400).json({ error: "Parâmetros de início e fim são obrigatórios" });
      }
      const movimentacoes = await movimentacaoService.listarPorPeriodo(inicio, fim);
      res.json(movimentacoes);
    } catch (error) {
      res.status(500).json({ error: "Erro ao listar movimentações por período" });
    }
  },
};

module.exports = MovimentacaoController;