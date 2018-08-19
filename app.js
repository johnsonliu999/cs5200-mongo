var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const applicationRouter = require('./routes/apis/application');
const componentRouter = require('./routes/apis/component');
const developerRouter = require('./routes/apis/developer');
const viewRouter = require('./routes/apis/view');
const widgetRouter = require('./routes/apis/widget');
require('./models/developer');
require('./models/application');
require('./models/component');
require('./models/view');
require('./models/widget');
require('./models/controller');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api/developer', developerRouter);
app.use('/api/application', applicationRouter);
app.use('/api/component', componentRouter);
app.use('/api/component', componentRouter);
app.use('/api/view', viewRouter);
app.use('/api/widget', widgetRouter);

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
  res.render('error');
});

require('./models/database');

module.exports = app;
