const express = require("express");
const PORT = 3000;
const nunjucs = require("nunjucks");

const app = express();

nunjucs.configure("views", {
  autoescape: true,
  express: app,
  watch: true
});

app.set("view engine", "njk");

app.get("/", (req, res) => {
  //req e res são middleware
  return res.render("list", { name: "Thiaguito" });
});

app.listen(PORT);
console.log("Server running in PORT", PORT);
