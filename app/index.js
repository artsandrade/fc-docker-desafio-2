const express = require("express");
const mysql = require("mysql");

const app = express();
const port = 3000;

const configDB = {
  host: "db",
  user: "user",
  password: "password123",
  database: "db_app",
};
const connection = mysql.createConnection(configDB);

connection.connect(function (err) {
  if (err) {
    console.error("Erro ao conectar ao MySQL:", err);
    return;
  }
  console.log("Conectado ao MySQL!");
});

app.get("/", async (req, res) => {
  let content = "<h1>Full Cycle Rocks!</h1>";
  const query = "SELECT * FROM people";

  connection.query(query, (err, results) => {
    if (err) {
      res.status(500).send("Erro ao realizar a consulta.");
      return;
    }

    if (results.length === 0) {
      content = content.concat("<p>Nenhum registro encontrado.</p>");
      return;
    }

    content = content.concat("<ul>");
    results.forEach((element) => {
      content = content.concat(`<li>${element.name}</li>`);
    });

    content = content.concat("</ul>");
    res.send(content);
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
