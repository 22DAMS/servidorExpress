const express = require("express");
const routerView = express.Router();
const listaTareas = require("./script");

//Solicitudes GET

//Listar todos los elementos:
routerView.get("/tareas", (req, res) => {
  res.status(200).json(listaTareas);
});

//Listar tareas completas o incompletas:
routerView.get("/tareas/:estado", (req, res) => {
  const estado = req.params.estado;

  if (estado === "completas") {
    const completas = listaTareas.listarCompletas();
    return res.status(200).json(completas);
  } else if (estado === "incompletas") {
    const incompletas = listaTareas.listarIncompletas();
    return res.status(200).json(incompletas);
  } else {
    return res.status(404).json({ error: "ruta no especificada" });
  }
});

routerView.get("/tarea/:id", (req, res) => {
  const tareaID = req.params.id;
  const tarea = listaTareas.buscarTarea(tareaID);

  if (tarea) {
    res.status(200).json(tarea);
  } else {
    res.status(404).json({ error: "Tarea no encontrada" });
  }
});

module.exports = routerView;
