const createError = require('http-errors');


module.exports = function (app) {
    
  // !! - routes
  app.use('/', require('./root'));
  app.use('/api/auth', require('./auth'));
  
  // catch 404 and forward to error handler
  app.use(function (req, res, next) {
    next(createError(404));
  });

  // error handler
  app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
  });
};


