require('colors');

const mostrarMenu = async() => {

    return new Promise( resolve => {
       
        console.clear();
        console.log('=========================='.green);
        console.log('  Selccione una opcion'.green)
        console.log('==========================\n'.green);
    
        console.log(`${'1.'.green} Crear tarea`);
        console.log(`${'2.'.green} Listar treas`);
        console.log(`${'3.'.green} Listar treas completadas`);
        console.log(`${'4.'.green} Listar treas pendientes`);
        console.log(`${'5.'.green} Completar tarea(s)`);
        console.log(`${'6.'.green} Borrar tarea`);
        console.log(`${'0.'.green} Salir \n`);
    
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        })
    
        readline.question('Seleccione una opcion: ', (opt) => {
            readline.close();
            resolve(opt);
        });

    });

   
}


const pausa = () => {

    return new Promise( resolve => {

        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });
    
        readline.question(`\nPresione ${'ENTER'.green}: \n`, () => {
            readline.close();
            resolve();
        });

    });

}

module.exports = {
    mostrarMenu, pausa
}