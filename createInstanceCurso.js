

const Curso = require('./Curso');

const curso = Curso.build({
    titulo: 'CCNA 1',
    descripcion: 'Curso basico de redes 1 con ccna y cisco'    
});

curso.save().then(()=> {
        console.log('Curso guardado con exito')
}).catch(err => {
    console.log(err.message);
}).finally( ()=> {
    Curso.close;
});