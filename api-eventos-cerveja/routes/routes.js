// routes/routes.js

const express = require('express');
const router = express.Router();
const controller = require('../controller/controller.js');

router.get('/usuario/:id', controller.getByName);
router.get('/nacionalidade/:id', controller.getByNacionalidade);
router.get('/tipo/:id', controller.getByTipo);
router.get('/', controller.getByABV);

module.exports = router;