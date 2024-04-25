const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const csrfSecuredRouter = require("./routes/csrfSecured");
const notCsrfSecuredRouter = require("./routes/notCsrfSecured");

const app = express();

// csrf setup
const csrf = require("csurf");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/insecure", notCsrfSecuredRouter);


// set up csrf middleware
// checks post requests for token
// makes available req.csrfToken()
app.use(csrf({ cookie: true }));

// app.use(function(req, res, next) {
//   // Expose variable to templates via res.locals
//   res.locals.csrfToken = req.csrfToken();
//   next();
// });

app.use("/secure", csrfSecuredRouter);

app.use(express.static(path.join(__dirname, "public")));


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
