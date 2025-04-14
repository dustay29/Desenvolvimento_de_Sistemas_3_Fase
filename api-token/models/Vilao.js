import { database } from "../database.js";
import { DataTypes } from "sequelize";

// Model para indicar a estrutura da tabela Viloes do banco de dados
const Vilao = database.define('Vilao', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nome: {
        type: DataTypes.STRING
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
    freezeTableName: true, // Evita que o nome da tabela Vilao fique como Vilaos
    tableName: 'ListaViloes',
})

export { Vilao }