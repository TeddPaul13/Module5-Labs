const express = require("express");
const app = express();
const cors = require("cors");

const port = 4000;

const calculateRoute = require ('./routes/calculateRoute.js');

app.use(cors())
app.use('/calc', calculateRoute);


app.get("/", (req, res) => {
  res.send("Hello! Welcome to Exercise 5");
 });

app.listen(port, () => {
    console.log(`Example app
  listening at
  http://localhost:${port}`);
  });
  