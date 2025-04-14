import { database } from "../database.js";
import { DataTypes } from "sequelize";

database.define()

// Model para indicar a estrutura da tabela Herois do banco de dados
const Heroi = database.define('Heroi', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: DataTypes.STRING // VARCHAR(255)
    },
    pontosDePoder: {
        type: DataTypes.FLOAT
    },
    vitorias: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    derrotas: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
}, {
    freezeTableName: true, // Evita que o nome da tabela Heroi fique como Herois
    tableName: 'ListaHerois',
})

export { Heroi }