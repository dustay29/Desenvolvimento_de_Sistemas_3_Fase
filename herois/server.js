const express = require('express');
const sequelize = require('./database.js');
const Batalhas = require('./models/Batalha.js');
const Herois = require('./models/Heroi.js');
const Viloes = require('./models/Vilao.js');
const router = require('./rotas/routes.js');


const app = express();
app.use(express.json());
app.use(router);


const syncDatabase = async () => {
    try {
        // Sincroniza o banco de dados antes de iniciar o servidor
        await sequelize.sync({ force: false }); // Altere para `true` se for para limpar as tabelas
        console.log('Tabelas criadas no banco de dados!');
    } catch (error) {
        console.error('Erro ao criar as tabelas:', error);
    }
}


// Chama a função para sincronizar o banco de dados
syncDatabase().then(() => {
    // Inicia o servidor somente após a sincronização das tabelas
    app.listen(3000, () => {
        console.log("Servidor express rodando na porta 3000!");
    });
});






// node --watch server.js
