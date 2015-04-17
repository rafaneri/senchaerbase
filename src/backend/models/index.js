/**
 * Created by rafaelneri on 13/03/15.
 */
var config = require('./../config');
var mongoose = require('mongoose');

mongoose.connect('mongodb://' + config.connection.server + ':' + config.connection.port + '/' + config.connection.database, function(err, res) {
    if(err) {
        console.log('error connecting to MongoDB Database. ' + err);
    } else {
        console.log('Connected to Database');
    }
});

module.exports.Nota = require('./domain/Nota');
module.exports.mongoose = mongoose;