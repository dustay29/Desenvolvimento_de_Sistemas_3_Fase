const express = require('express');
const router = express.Router();
const controller = require('../controllers/controller.js');


// mostrar todas as batalhas
router.get('/batalha', controller.todasBatalhas);
router.post('/heroi', controller.cadastrarHeroi);
router.post('/vilao', controller.cadastrarVilao);
router.get('/:parametro', controller.listar);
router.delete('/heroi/:id', controller.deletarHeroi);
router.delete('/vilao/:id', controller.deletarVilao);
// Rota para resetar as tabelas de heróis e vilões
router.post('/resetar-tabelas', controller.resetarTabelas);
// rota da batalha
router.post('/batalha', controller.batalhar);


module.exports = router;

