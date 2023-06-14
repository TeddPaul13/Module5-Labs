const express = require("express");

const cors = require("cors");

const app = express();

const port = 3000;

const addition = require("../Exercise3/routes/addition.js");
const sub = require("../Exercise3/routes/sub.js");
const division = require("../Exercise3/routes/division.js");
const multiply = require("../Exercise3/routes/multiply.js");

app.use(cors());

app.use("/calculator", addition);
app.use("/calculator", sub);
app.use("/calculator", division);
app.use("/calculator", multiply);

app.get("/", (req, res) => {
  res.send("Hello! Welcome to the first server");
});

// EXERCISE 4: QUERY PARAMETERS attempt
// app.get("/calulator/add", (req, res) => {
//   console.log(req.params)
//   res.send(req.params);
// });

app.listen(port, () => {
  console.log(`Example app
listening at
http://localhost:${port}`);
});

//EXERCISE 4
// Path Parameters are used in exercise 3; in line 24 the "/" is route path that matches the root route
