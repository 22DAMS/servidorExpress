const express = require("express");
const router = express.Router();

router.get("/tareas_completas", (req, res) => {
  res.json([
    { id: "01", isCompleted: false, description: "whash the dishes" },
    { id: "02", isCompleted: true, description: "Clean rooms" },
    { id: "03", isCompleted: true, description: "Walk the dog" },
    { id: "04", isCompleted: false, description: "Do exercise" },
    { id: "05", isCompleted: true, description: "Study programming" },
  ]);
});

router.get("/tareas_incompletas", (req, res) => {
  res.json([
    { id: "01", isCompleted: false, description: "whash the dishes" },
    { id: "02", isCompleted: true, description: "Clean rooms" },
    { id: "03", isCompleted: true, description: "Walk the dog" },
    { id: "04", isCompleted: false, description: "Do exercise" },
    { id: "05", isCompleted: true, description: "Study programming" },
  ]);
});
