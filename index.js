const express = require("express");
const PORT = 3000;
const app = express();

const logMidlleware = (req, res, next) => {
  console.log(
    `HOST: ${req.headers.host} | URL: ${req.url} | METHOD: ${req.method}`
  );

  //Todas os middleware que executem apos esse aqui vão ter acesso a isso
  req.appName = "Gonode";

  return next(); // O next não deixa o middleware bloquear o fluxo de dados
};

app.use(logMidlleware); // Todas rotas usam o midlleware

app.get("/", (req, res) => {
  //req e res são middleware
  return res.send(`Bem Vindo ao ${req.appName}, ${req.query.name}`);
});

app.get("/nome/:name", (req, res) => {
  return res.json({
    message: `Bem-Vindo, ${req.params.name}`
  });
});

app.listen(PORT);
console.log("Server running in PORT", PORT);
