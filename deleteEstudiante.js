
const Estudiante = require("./Estudiante");

const deleteEstudiante = async (_id) => {
    try{
        let estudiante = await Estudiante.destroy({
            where: {
                id: _id
            }
        });
        console.log(estudiante);
    }catch(err){
        console.log(err.message);
    }finally{
        Estudiante.close;
    }
}

deleteEstudiante(1);