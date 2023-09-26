const express = require("express");
const app = express();
const addDays = require("date-fns/addDays");
app.get("/", (request, response) => {
  const date = new Date();
  const month = date.getMonth();
  const year = date.getFullYear();
  const day = date.getDate();
  const result = addDays(new Date(year, month, day), 100);
  const finalResult = `${result.getDate()}/${
    result.getMonth() + 1
  }/${result.getFullYear()}`;

  response.send(finalResult);
});

app.listen(3000);

module.exports = app;
