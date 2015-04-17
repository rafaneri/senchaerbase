/**
* Define o modelo para o objeto Grupo
*/
Ext.define('NotasErbase.model.Grupo', {
    extend: 'Ext.data.Model',
    config: {
        identifier: 'sequential',
        fields: [
        	{name: 'id', type: 'int'},
        	{name: 'nome', type: 'string'}
        ],

        validations: [
            {type: 'length', field: 'nome', min: 1}
        ]
    }
});
