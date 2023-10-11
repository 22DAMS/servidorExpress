//Lista tareas:
const listaTareas = [
  { id: "01", isCompleted: false, description: "whash the dishes" },
  { id: "02", isCompleted: true, description: "Clean rooms" },
  { id: "03", isCompleted: true, description: "Walk the dog" },
  { id: "04", isCompleted: false, description: "Do exercise" },
  { id: "05", isCompleted: true, description: "Study programming" },
];

//Funciones:

//Listar todas las tareas:
function listarTareas() {
  return listaTareas;
}

//Listar completas:
function listarCompletas() {
  const filtroCompletas = listaTareas.filter(
    (tarea) => tarea.isCompleted === true
  );
  return filtroCompletas;
}

//Listar incompletas:
function listarIncompletas() {
  const filtroIncompletas = listaTareas.filter(
    (tarea) => tarea.isCompleted === false
  );
  return filtroIncompletas;
}

//Agregar tarea:
function agregarTarea(id, description) {
  listaTareas.push({ id, description, isCompleted: false });
}

//Eliminar tarea:
function eliminarTarea(indice) {
  listaTareas.splice(indice, 1);
}

//completar tarea:
function completarTarea(indice) {
  listaTareas[indice].isCompleted = true;
}

module.exports = {
  listaTareas,
  listarTareas,
  listarCompletas,
  listarIncompletas,
  agregarTarea,
  eliminarTarea,
  completarTarea,
};
