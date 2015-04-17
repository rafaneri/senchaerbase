/**
* Define o data store para o objeto Nota
*/
Ext.define('NotasErbase.store.NotaLocalStore', {
    extend: 'Ext.data.Store',
    config: {
        model: 'NotasErbase.model.Nota',
        sorters: [{property: 'id', direction: 'DESC'}],
        groupField: 'grupo_id',
        autoLoad: true,
        autoSync: true,
        proxy: {
            type: 'localstorage',
            id  : 'notas-locais'
        }
    }
});
