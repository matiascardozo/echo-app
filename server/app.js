var express = require('express');
var logger = require('morgan');
var Boom = require('@hapi/boom');

var indexRouter = require('./routes/index');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', indexRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    throw Boom.notFound('Page not found');
});


// error middleware
app.use(function (err, req, res, next) {
    if (!err.isBoom) {
      err = Boom.badImplementation();
    }
    res.status(err.output.statusCode).send(err.output.payload);
});

module.exports = app;
