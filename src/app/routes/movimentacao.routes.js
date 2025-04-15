const express = require('express');
const router = express.Router();
const movimentacaoController = require('../controllers/movimentacao.controller');

router.get('/', movimentacaoController.listar);
router.post('/', movimentacaoController.criar);
router.get('/periodo', movimentacaoController.listarPorPeriodo);

module.exports = router;