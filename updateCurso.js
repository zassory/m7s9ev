

const Curso = require('./Curso');

const updateCurso = async(_id, _titulo, _descripcion) => {
    try{
        let cursoUpdate = {
            id: _id,
            titulo: _titulo,
            descripcion: _descripcion
        }
    
        let curso = await Curso.update(cursoUpdate, {
            where: {
                id: _id
            }
        });
        console.log(curso);
    } catch(err){
        console.error(err.message);
    } finally {
        Curso.close;
    }
}

updateCurso(1,'Topicos avanzados de programacion','programacion con netbeans');