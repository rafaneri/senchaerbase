/**
* Define o data store para o objeto Nota
*/
Ext.define('NotasErbase.store.NotaRemotaStore', {
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
            type: 'rest',
            url  : 'http://192.168.25.4:3200/api/notas'
        }
    }
});
