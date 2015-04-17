/**
 * Created by rafaelneri on 13/03/15.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var notaSchema = new Schema({
    // título
    titulo:    {
        type    : String
    },
    // comentario
    comentario: {
        type    : String
    },
    // grupo
    grupo_id: {
        type    : Number
    }
});

module.exports = mongoose.model('Nota', notaSchema);