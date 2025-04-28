const veiculoRepository = require("../repositories/veiculo,repository");

const VeiculoService = {
  listar: async () => {
    return await veiculoRepository.listar();
  },

  buscarPorPlaca: async (placa) => {
    const veiculo = await veiculoRepository.buscarPorPlaca(placa);
    if (!veiculo) throw new Error("Veículo não encontrado");
    return veiculo;
  },

  criar: async (dados) => {
    return await veiculoRepository.criar(dados);
  },

  atualizarAutorizacao: async (id, autorizacao) => {
    const veiculo = await veiculoRepository.buscarPorId(id);
    if (!veiculo) throw new Error("Veículo não encontrado");

    veiculo.autorizado = autorizacao;
    await veiculo.save();
    return veiculo;
  },
};

module.exports = VeiculoService;