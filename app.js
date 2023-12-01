const express = require("express");
const app = express();
const port = 8080;
const routerView = require("./Routes/list-view-router");
const routerEdit = require("./Routes/list-edit-router");
const routerAuth = require("./Routes/auth");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();
const SECRET_KEY = process.env.SECRET_KEY;

app.use(express.json());

app.use("/", routerAuth);
app.use(validarToken);
app.use("/", routerView);
app.use("/", routerEdit);
app.use(validarMetodoHttp);

app.get("/", validarToken, (req, res) => {
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

function validarToken(req, res, next) {
  const accesToken = req.headers.authorization;
  if (!accesToken) {
    return res.status(401).json({ message: "Token no valido" });
  }
  jwt.verify(accesToken, SECRET_KEY, (err) => {
    if (err) {
      return res.status(401).json({ error: "Token no valido" });
    } else {
      next();
    }
  });
}

app.listen(port, () => {
  console.log(`Servidor corriendo en ${port}`);
});
