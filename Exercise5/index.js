const express = require("express");
const app = express();
const cors = require("cors");

const port = 4000;

const calculateRoute = require ('../Exercise5/routes/calculateRoute.js');
const calculatorLibrary = require('../libraries/calculatorLibrary.js');
const Message = require('../libraries/messageLibrary.js');

app.use(cors())
app.use('/calc', calculateRoute);
app.use('/', calculatorLibrary);
app.use('/', Message)

app.get("/", (req, res) => {
  res.send("Hello! Welcome to Exercise 5");
 });

app.listen(port, () => {
    console.log(`Example app
  listening at
  http://localhost:${port}`);
  });
  