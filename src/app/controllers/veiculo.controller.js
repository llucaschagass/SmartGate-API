const veiculoService = require("../services/veiculo.service");

const VeiculoController = {
  listar: async (req, res) => {
    try {
      const veiculos = await veiculoService.listar();
      res.status(200).json(veiculos);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  buscarPorPlaca: async (req, res) => {
    try {
      const { placa } = req.params;
      const veiculo = await veiculoService.buscarPorPlaca(placa);
      res.status(200).json(veiculo);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  },

  criar: async (req, res) => {
    try {
      const veiculo = await veiculoService.criar(req.body);
      res.status(201).json(veiculo);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  atualizarAutorizacao: async (req, res) => {
    try {
      const { id } = req.params;
      const { autorizado } = req.body;
      const veiculo = await veiculoService.atualizarAutorizacao(id, autorizado);
      res.status(200).json(veiculo);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  },
};

module.exports = VeiculoController;