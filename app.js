var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const helmet = require('helmet');
const mongoose = require('mongoose');
// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/auth');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(helmet());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'frontopdb/build')));

// app.use('/', indexRouter);
// app.use('/users', usersRouter);

require('./routes/index')(app);

mongoose.connect('mongodb://localhost/OpDB', { useNewUrlParser: true });
mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});


module.exports = app;
