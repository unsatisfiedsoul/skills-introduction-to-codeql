const express = require("express");
const app = express();

app.get("/test", function (req, res) {
  const userInput = req.query.input;
  res.send(eval(userInput)); // 🔴 Vulnerable code
});

app.listen(3000);
