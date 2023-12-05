const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.listen(80, () => {
  console.log("Servidor web em execução na porta 80");
});
