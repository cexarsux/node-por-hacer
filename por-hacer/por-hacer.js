const fs = require('fs');

let listadoPorHacer = [];

const crear = (descripcion) => {
    cargarDB();

    let porHacer = {
        descripcion,
        completado: false
    };

    let tareaBD = listadoPorHacer.find(tarea => tarea.descripcion === descripcion);

    if (!tareaBD) {
        listadoPorHacer.push(porHacer);
        guardarDB();
    } else
        return "ERROR: Esta tarea ya existe.";


    return listadoPorHacer;
}

const listar = () => {
    cargarDB();

    return listadoPorHacer;
}

const cargarDB = () => {
    try {
        listadoPorHacer = require('../db/data.json');
    } catch (error) {
        listadoPorHacer = [];
    }
}

const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile(`db/data.json`, data, (err) => {
        if (err)
            throw new Error(err);
    });
}

const actualizar = (descripcion, completado = true) => {
    cargarDB();

    let tarea = listadoPorHacer.find(tarea => tarea.descripcion === descripcion);

    if (!tarea)
        return "ERROR: Esta tarea no existe.";
    else {
        let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return listadoPorHacer;
        //listadoPorHacer.splice()
    }
}

const borrar = (descripcion) => {
    cargarDB();

    let tarea = listadoPorHacer.find(tarea => tarea.descripcion === descripcion);

    if (!tarea)
        return "ERROR: Esta tarea no existe.";
    else {
        listadoPorHacer.pop(tarea);
        guardarDB();
        return "Tarea eliminada."
    }
}

module.exports = {
    crear,
    actualizar,
    listar,
    borrar
}