const Sequelize = require('sequelize');
const db = require('./authenticatedDB');

//Creacion de la tabla estudiante
const Estudiante = db.define('estudiantes', {
    //Propiedades del objeto Estudiante
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombres: {
        type: Sequelize.STRING,
        allowNull: false
    },
    apellidos: {
        type: Sequelize.STRING,
        allowNull: false
    },
    edad: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    nro_identificacion: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
});

module.exports = Estudiante;