// routes/routes.js

const express = require('express');
const router = express.Router();
const controller = require('../controller/controller.js');

router.post('/cadastrar', controller.post);
router.get('/listar', controller.get);
router.get('/detalhes/:id', controller.getById);

module.exports = router;