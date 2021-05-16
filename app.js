require("dotenv").config();
const express = require("express");
const hbs = require("hbs");

const app = express();
const PORT = process.env.PORT || 3000;

//renderiza vistas sencillas
app.set("view engine", "hbs");

//para usar parciales en HB
hbs.registerPartials(__dirname + "/views/partials");

//servir contenido estatico
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home", {
    nombre: "Camilo Morales",
    titulo: "Curso Node JS",
  });
});

app.get("/generic", (req, res) => {
  res.render("generic", {
    nombre: "Camilo Morales",
    titulo: "Curso Node JS",
  });
});

app.get("/elements", (req, res) => {
  res.render("elements", {
    nombre: "Camilo Morales",
    titulo: "Curso Node JS",
  });
});

app.get("*", (req, res) => {
  res.sendFile(__dirname + "/public/404.html");
});

app.listen(PORT, () => {
  console.log(`Listen on Port ${PORT}`);
});
