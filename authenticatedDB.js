const {
    Sequelize
} = require('sequelize');

const sequelize = new Sequelize('practica_db','zasory','Hakxf2n5$', {
    host: 'localhost',
    port: 5432,
    dialect: 'postgres',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});

module.exports = sequelize;