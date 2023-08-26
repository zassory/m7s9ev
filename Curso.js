const Sequelize = require('sequelize');
const db = require('./authenticatedDB');

//Creacion de la tabla estudiante
const Curso = db.define('cursos', {
    //Propiedades del objeto cursos
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    titulo: {
        type: Sequelize.STRING,
        allowNull: false
    },
    descripcion: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = Curso;