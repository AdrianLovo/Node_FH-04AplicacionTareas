const { v4: uuidv4 } = require('uuid');

class Tarea{

    id = '';
    desc = '';
    completadoEn = null;

    constructor(desc){
        this.id = uuidv4();     //Generar id unico a nivel mundial
        this.desc = desc;
    }



}

module.exports = Tarea;