/**
* Define o data store para o objeto Nota
*/
Ext.define('NotasErbase.store.NotaLocalStore', {
    extend: 'Ext.data.Store',
    config: {
        model: 'NotasErbase.model.Nota',
        sorters: [{property: 'id', direction: 'DESC'}],
        grouper: {
            groupFn: function(record) {
                return record.getGrupo().get('nome');
            },
            sortProperty: 'grupo_id'
        },
        autoLoad: true,
        proxy: {
            type: 'localstorage',
            id  : 'notas-locais'
        }
    }
});
