const express = require("express");
const routerView = express.Router();
const listaTareas = require("./script");

//Solicitudes GET

//Listar todos los elementos:
routerView.get("/tareas", (req, res) => {
  res.json(listaTareas);
});

//Listar tareas completas o incompletas:
routerView.get("/tareas/:estado", (req, res) => {
  const estado = req.params.estado;

  if (estado === "completas") {
    const completas = listaTareas.listarCompletas();
    return res.json(completas);
  } else if (estado === "incompletas") {
    const incompletas = listaTareas.listarIncompletas();
    return res.json(incompletas);
  } else {
    return res.json({ error: "ruta no especificada" });
  }
});

module.exports = routerView;
