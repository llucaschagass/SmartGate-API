const express = require('express');
const router = express.Router();
const veiculoController = require('../controllers/veiculo.controller');

router.get('/', veiculoController.listar);
router.get('/placa/:placa', veiculoController.buscarPorPlaca);
router.post('/', veiculoController.criar);
router.patch('/:id/autorizacao', veiculoController.atualizarAutorizacao);

module.exports = router;