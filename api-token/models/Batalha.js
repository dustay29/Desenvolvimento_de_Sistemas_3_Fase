import { database } from "../database.js";
import { DataTypes } from 'sequelize'

const Batalha = database.define('Batalha', {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true
    }, 
    id_heroi: {
        type: DataTypes.INTEGER,
    },
    id_vilao: {
        type: DataTypes.INTEGER,
    },
    nome_vencedor: {
        type: DataTypes.STRING
    }
})

export { Batalha }