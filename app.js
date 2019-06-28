const argv = require('./config/yargs').argv;
const porHacer = require('./por-hacer/por-hacer')
const colors = require('colors')

let comando = argv._[0];

switch (comando) {
    case 'crear':
        var tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;
    case 'listar':
        let listado = porHacer.listar();
        console.log("==================================".green);
        for (var tarea of listado) {
            console.log(tarea.descripcion);
            console.log("Estado: ", tarea.completado);
            console.log("==================================".green);
        }

        break;
    case 'actualizar':
        var tarea = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(tarea);
        break;
    case 'borrar':
        var resp = porHacer.borrar(argv.descripcion);
        console.log(resp);
        break;
    default:
        console.log("Comando no reconocido");
        break;
}