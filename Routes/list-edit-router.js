const express = require("express");
const routerEdit = express.Router();
const listaTareas = require("./script");

//Solicitud POST
routerEdit.post("/tarea", (req, res) => {
  const { id, description } = req.body;
  listaTareas.agregarTarea(id, description);
  res.json(listaTareas);
});

//Solicitud PUT
routerEdit.put("/tarea/:id", (req, res) => {
  const tareaID = req.params.id;
  const tareaIndex = listaTareas.listaTareas.findIndex(
    (tarea) => tarea.id === tareaID
  );
  listaTareas.completarTarea(tareaIndex);
  res.json(listaTareas);
});

//Solicitud DELETE
routerEdit.delete("/tarea/:id", (req, res) => {
  const tareaID = req.params.id;
  const tareaIndex = listaTareas.listaTareas.findIndex(
    (tarea) => tarea.id === tareaID
  );
  listaTareas.eliminarTarea(tareaIndex);
  res.json(listaTareas);
});

module.exports = routerEdit;
