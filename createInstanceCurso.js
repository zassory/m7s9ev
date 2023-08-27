

const Curso = require('./Curso');

const curso = Curso.build({
    titulo: 'Programación Orientada al Objeto',
    descripcion: 'Programacion utilizando objetos, herencias , colaboracion'
});

curso.save().then(()=> {
        console.log('Curso guardado con exito')
}).catch(err => {
    console.log(err.message);
}).finally( ()=> {
    Curso.close;
});