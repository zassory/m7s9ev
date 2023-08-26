

const Estudiante = require('./Estudiante');

const estudiante = Estudiante.build({
    nombres: 'Nicolás Vladimir',
    apellidos: 'Cáceres Latorre',
    edad: 39,
    nro_identificacion: 2210153
});

estudiante.save().then(()=> {
        console.log('Estudiante guardado con exito')
}).catch(err => {
    console.log(err.message);
}).finally( ()=> {
    Estudiante.close;
});