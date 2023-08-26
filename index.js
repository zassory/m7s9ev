
const Curso = require('./Curso');

Curso.sync().then( ()=> {
    console.log('Nueva tabla Cursos ha sido creada');
}).catch(err => {
    console.log(err.message)
}).finally(()=> {
    Curso.close;
});

