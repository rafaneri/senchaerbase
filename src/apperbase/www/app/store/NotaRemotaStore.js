/**
* Define o data store para o objeto Nota
*/
Ext.define('NotasErbase.store.NotaRemotaStore', {
    extend: 'Ext.data.Store',
    config: {
        model: 'NotasErbase.model.Nota',
        sorters: [{property: 'id', direction: 'DESC'}],
        groupField: 'grupo_id',
        autoLoad: true,
        autoSync: true,
        proxy: {
            type: 'rest',
            url : 'http://192.168.25.4:3200/api/notas'
        }
    }
});
