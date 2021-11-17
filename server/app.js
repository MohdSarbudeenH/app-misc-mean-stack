var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cors = require('cors');

const db = require("./db")
const indexRouter = require("./routes/index");
const moduleRouter = require("./routes/module");
const testCaseRouter = require("./routes/testCase");

const app = express();
app.use(cors({origin: '*'}));
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({ extended: false, limit: '50mb' }));
app.use(express.static(path.join(__dirname, 'public')));
//Put your angular dist folder here
app.use(express.static(path.join(__dirname, '../dist/app-misc')));

const directory = path.join(__dirname, './images');
app.use("/images", express.static(directory));

app.use('/', indexRouter);
app.use("/api/module", moduleRouter);
app.use("/api/testCase", testCaseRouter);

app.get('/api/test', (req, res) => {
  res.send('NodeJs up and running..')
})

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  //res.render('error');
  res.send('Error returned');
});

module.exports = app;