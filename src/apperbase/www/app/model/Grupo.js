/**
* Define o modelo para o objeto Grupo
*/
Ext.define('NotasErbase.model.Grupo', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
        	{name: 'id', type: 'int'},
        	{name: 'nome', type: 'string'}
        ]
    }
});
