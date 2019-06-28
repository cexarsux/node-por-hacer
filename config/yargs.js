const descripcion = {
    demand: true,
    alias: 'd'
};

const completado = {
    demand: true,
    alias: 'c',
    default: true
};

const argv = require('yargs')
    .command('crear', 'Crea una tarea por hacer.', descripcion)
    .command('actualizar', 'Actualiza el estado completado de una tarea.', { descripcion, completado })
    .command('borrar', 'Borra una tarea.', descripcion)
    .help()
    .argv;

module.exports = {
    argv
}

/*
comando crear 'Crear un elemento por hacer'
        --descripcion -d

comando actualizar 'Actualiza el estado completado de una tarea'
        --descripcion -d
        --completado -c true

        --help
*/