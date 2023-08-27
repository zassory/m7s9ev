

const Estudiante = require('./Estudiante');

const updateEstudiante = async(_id, _nombres) => {
    try{
        let estudianteUpdate = {
            id: _id,
            nombres: _nombres
        }
    
        let estudiante = await Estudiante.update(estudianteUpdate, {
            where: {
                id: _id
            }
        });
        console.log(estudiante);
    } catch(err){
        console.error(err.message);
    } finally {
        Estudiante.close;
    }
}

updateEstudiante(1,'Nicolás Vladimir');