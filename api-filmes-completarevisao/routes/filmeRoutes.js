
const express = require('express');
const router = express.Router();
const controller = require('../controllers/filmeController.js');

router.get('/', controller.get);
router.post('/cadastrar', controller.post);
router.get('/:categoria', controller.getById);
router.put('/atualizar/:id',controller.put)
router.delete('/deletar/:id', controller.delete)

module.exports = router;
