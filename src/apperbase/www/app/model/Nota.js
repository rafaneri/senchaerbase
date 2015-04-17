/**
* Define o modelo para o objeto Nota
*/
Ext.define('NotasErbase.model.Nota', {
    extend: 'Ext.data.Model',
    uses: ['NotasErbase.model.Grupo'],
    config: {
        identifier: 'sequential',
        idProperty: '_id',
        fields: [
            {name: '_id', type: 'auto'},
            {name: 'titulo', type: 'string'},
            {name: 'comentario', type: 'string'},
            {name: 'grupo_id', type: 'int'}
        ],
        belongsTo: {
            model: 'NotasErbase.model.Grupo'
        },
        validations: [
            {type: 'length', field: 'titulo', min: 1}
        ]
    }
});