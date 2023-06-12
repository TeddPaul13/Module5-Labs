const express = require("express");

const app1 = express();
const app2 = express();
const app3 = express();

const port1 = 3000;
const port2 = 4000;
const port3 = 5000;

app1.get("/", (req, res) => {
  res.send("Hello! Welcome to the first server");
});

app2.get("/", (req, res) => { 
  res.send("Hello! Welcome to the SECOND server");
});

app3.get("/", (req, res) => {
  res.send("Hello! Welcome to the THIRD server");
});

app1.listen(port1, () => {
  console.log(`Example app
listening at
http://localhost:${port1}`);
});
app2.listen(port2, () => {
  console.log(`Example app
  listening at
  http://localhost:${port2}`);
});
app3.listen(port3, () => {
  console.log(`Example app
  listening at
  http://localhost:${port3}`);
});
