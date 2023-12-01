const express = require("express");
const routerEdit = express.Router();
const listaTareas = require("./script");

//Middleware solicitudes POST y PUT:
routerEdit.use((req, res, next) => {
  const bodyKeys = Object.keys(req.body);
  const paramsKeys = Object.values(req.params);

  if (req.method === "POST" && req.path !== "/login") {
    if (bodyKeys.length === 0) {
      return res.status(400).json({ error: "Solicitud vacía." });
    }
    if (!bodyKeys.includes("id") || !bodyKeys.includes("description")) {
      return res
        .status(400)
        .json({ error: "Solicitud con información incompleta" });
    }
  }
  if (req.method === "PUT" && bodyKeys.length === 0) {
    return res.status(400).json({ error: "Solicitud vacia." });
  }
  next();
});

//Solicitud POST
routerEdit.post("/tarea", (req, res) => {
  const { id, description } = req.body;
  listaTareas.agregarTarea(id, description);
  res.status(201).json(listaTareas);
});

//Solicitud PUT
routerEdit.put("/tarea", (req, res) => {
  const tareaID = req.body.id; // Accede al ID desde el cuerpo
  const tareaIndex = listaTareas.listaTareas.findIndex(
    (tarea) => tarea.id === tareaID
  );
  listaTareas.completarTarea(tareaIndex);
  res.status(201).json(listaTareas);
});

//Recibir ID por path params:
// routerEdit.put("/tarea/:id", (req, res) => {
//   const tareaID = req.params.id;
//   const tareaIndex = listaTareas.listaTareas.findIndex(
//     (tarea) => tarea.id === tareaID
//   );
//   listaTareas.completarTarea(tareaIndex);
//   res.json(listaTareas);
// });

//Solicitud DELETE
routerEdit.delete("/tarea", (req, res) => {
  const tareaID = req.body.id;
  const tareaIndex = listaTareas.listaTareas.findIndex(
    (tarea) => tarea.id === tareaID
  );
  listaTareas.eliminarTarea(tareaIndex);
  res.status(200).json(listaTareas);
});

//Recibir ID por path params:
// routerEdit.delete("/tarea/:id", (req, res) => {
//   const tareaID = req.params.id;
//   const tareaIndex = listaTareas.listaTareas.findIndex(
//     (tarea) => tarea.id === tareaID
//   );
//   listaTareas.eliminarTarea(tareaIndex);
//   res.json(listaTareas);
// });

module.exports = routerEdit;
