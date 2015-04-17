/**
 * Created by rafaelneri on 12/03/15.
 */
var express = require('express'),
	bodyParser = require('body-parser'),
	cookieParser = require('cookie-parser'),
	models = require('./models'),
	genericrestful = require('./routes/generic-restful'),
	app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.all('/', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
 });

app.use(function(err, req, res, next) {
  if (process.env.NODE_ENV !== 'test')
    console.error('Error:', err);

  if (middleware.isValidationError(err)) {
    res.status(400).send(err.errors);
  } else {
    res.status(err.code || 500).send('Error');
  }
});

app.use('/api', genericrestful(models.Nota, 'notas'));

module.exports = app;
