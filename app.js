const express = require("express");
const app = express();
const port = 8080;
const routerView = require("./Routes/list-view-router");
const routerEdit = require("./Routes/list-edit-router");
const routerAuth = require("./Routes/auth");
// const jwt = require("jsonwebtoken");

// const secretKey = "tuClaveSecreta";

app.use(express.json());

app.use("/", routerView);
app.use("/", routerEdit);
app.use("/login", routerAuth);
app.use(validarMetodoHttp);

app.get("/", (req, res) => {
  res.send("Pagina principal");
});

//Middleware para validar metodos HTTP:
function validarMetodoHttp(req, res, next) {
  const metodosValidos = ["GET", "POST", "PUT", "DELETE"];

  if (!metodosValidos.includes(req.method)) {
    return res.status(400).json({ error: "Metodo HTTP no valido." });
  }
  next();
}

// function validarToken(req, res, next) {
//   const accesToken = req.headers.authorization;
//   if (!accesToken) {
//     res.status(401).json({ message: "Token no valido" });
//   }
//   jwt.verify(accesToken, secretKey, (err) => {
//     if (err) {
//       res.send(err);
//     } else {
//       next();
//     }
//   });
// }

app.listen(port, () => {
  console.log(`Servidor corriendo en ${port}`);
});
