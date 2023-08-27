const Curso = require("./Curso");

Curso.findByPk(1).then( (curso) => {
    console.log(curso.get({
        plain: true
    }));
    //console.log(`id: ${curso.id} , titulo: ${curso.titulo} , descripcion: ${curso.descripcion}`);
}).catch(err => {
    console.error(err.message);
}).finally(()=> {
    Curso.close;
});

Curso.findOne({
     where: {
         id: 1
     }
 }).then( curso => { //Por cada usuario encontrado
     console.log(curso.get({
         plain: true
     }));
 }).catch(err => {
     console.log(err)
 }).finally(()=> {
     Curso.close;
 });

 const getAll = async() => {
    try{
        let cursos = await Curso.findAll({
            attributes: ['id','titulo','descripcion'],
            raw: true
        });
        console.log(cursos);
    }catch(err){
        console.error(err.message);
    }finally {
        Curso.close;
    }
 }

 getAll();

const getRowsCursos = async() => {
     try{
        let cursos = await Curso.findAll({
            order: [
                ['titulo','DESC']
            ],
            attributes: ['titulo','descripcion'],
            raw: true
        });
        console.log(cursos);
     }catch(err){
        console.error(err.message);
     }finally{
        Curso.close;
     }
 }

getRowsCursos();