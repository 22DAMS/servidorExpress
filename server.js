const express = require("express");
const app = express();
const port = 8080;

const listaTareas = [
  { id: "01", isCompleted: false, description: "whash the dishes" },
  { id: "02", isCompleted: true, description: "Clean rooms" },
  { id: "03", isCompleted: true, description: "Walk the dog" },
  { id: "04", isCompleted: false, description: "Do exercise" },
  { id: "05", isCompleted: true, description: "Study programming" },
];

app.get("/", (req, res) => {
  res.json(listaTareas);
});

app.listen(port, () => {
  console.log(`Servidor corriendo en ${port}`);
});
