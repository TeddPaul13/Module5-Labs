const express = require("express");
const app = express();
const cors = require("cors");

const port = 4000;

const calculateRoute = require ('../Exercise5/routes/calculateRoute.js');

app.use(cors())
app.use('/calc', calculateRoute);

app.get("/", (req, res) => {
  res.send("Hello! Welcome to Exercise 5");
 });

app.listen(port, () => {
    console.log(`Example app
  listening at2
  http://localhost:${port}`);
  });
  