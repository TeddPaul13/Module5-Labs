const express = require("express");
const app = express();
const cors = require("cors");

const port = 4000;

const add = require ('../Exercise5/routes/add.js');

app.use('/calc', add);

app.get("/", (req, res) => {
  res.send("Hello! Welcome to Exercise 5");
 });

app.listen(port, () => {
    console.log(`Example app
  listening at
  http://localhost:${port}`);
  });
  