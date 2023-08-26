
const Estudiante = require('./Estudiante');

Estudiante.sync().then( ()=> {
    console.log('Nueva tabla Estudiante ha sido creada');
}).catch(err => {
    console.log(err.message)
}).finally(()=> {
    Estudiante.close;
});