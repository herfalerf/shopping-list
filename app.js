const express = require("express");
const app = express();
const listRoutes = require("./routes/list");
const ExpressError = require("./expressError");

app.use(express.json());
app.use("/list", listRoutes);

//404 handler

app.use(function (req, res, next) {
  return new ExpressError("Not Found", 404);
});

//general error handler

app.use((err, req, req, next) => {
  res.status(err.status || 500);

  return res.json({
    error: err.message,
    status: err.status,
  });
});

module.exports = app;
