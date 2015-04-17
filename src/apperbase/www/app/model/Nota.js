/**
* Define o modelo para o objeto Nota
*/
Ext.define('NotasErbase.model.Nota', {
    extend: 'Ext.data.Model',
    uses: ['NotasErbase.model.Grupo'],
    config: {
        fields: [
            {name: 'id', type: 'int'},
            {name: 'titulo', type: 'string'},
            {name: 'comentario', type: 'string'},
            {name: 'grupo_id', type: 'int'}
        ],
        hasOne: {
            model: 'NotasErbase.model.Grupo',
            name: 'grupo'
        },
        validations: [
            {type: 'length', field: 'titulo', min: 1}
        ]
    }
});