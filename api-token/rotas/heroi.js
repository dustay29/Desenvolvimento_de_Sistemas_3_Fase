import express from 'express'
const router = express.Router()
import { listarHerois, criarHeroi, atualizarHeroi, excluirHeroi, criarVilao, batalhar, listarBatalhas } from '../controllers/heroi.js'
import { autenticar } from '../controllers/autenticacao.js'
import { verificarToken } from '../middlewares/autorizacao.js'

router.get('/heroi', verificarToken, listarHerois)
router.post('/heroi', verificarToken, criarHeroi)
router.put('/heroi/:id', verificarToken, atualizarHeroi)
router.delete('/heroi/:id', verificarToken, excluirHeroi)
router.post('/vilao', verificarToken, criarVilao)
router.post('/batalhas', verificarToken, batalhar)
router.get('/batalhas', verificarToken, listarBatalhas)
router.post('/login', autenticar)

export { router }