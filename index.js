require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT;

app.get("/", (req, res) => {
  console.log(req.app.get("env"));
  res.send("Hello World");
});

app.get("/api", (req, res) => {
  res.send("API");
});

app.get("/api/courses", (req, res) => {
  res.send([1, 2, 3]);
});

app.post("/api/login", (req, res) => {});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
