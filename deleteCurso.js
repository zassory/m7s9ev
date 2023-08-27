
const Curso = require("./Curso");

const deleteCurso = async (_id) => {
    try{
        let curso = await Curso.destroy({
            where: {
                id: _id
            }
        });
        console.log(curso);
    }catch(err){
        console.log(err.message);
    }finally{
        Curso.close;
    }
}

deleteCurso(2);