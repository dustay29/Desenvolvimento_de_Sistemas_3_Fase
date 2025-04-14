import express from 'express'
import 'dotenv/config'
const app = express()
// Importar a conexao criada com sequelize
import { database } from './database.js'
import { Heroi } from './models/Heroi.js'
import { router } from './rotas/heroi.js'

app.use(express.json())
app.use(router)

// Realizar a sincronização das configurações do sequelize com o banco de dados
try {
    // Método para sincronizar somente um model por vez
    // await Heroi.sync({ alter: true })
    // await Heroi.sync({ force: true })

    // Sincronizar todos os models juntos (quando modificar um model)
    // await database.sync({ alter: true})
} catch(erro){
    console.log(erro)
}

app.listen(3000, () => console.log('Servidor iniciado'))