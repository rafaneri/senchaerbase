/**
* Define o data store para o objeto Grupo
*/
Ext.define('NotasErbase.store.GrupoStore', {
    extend: 'Ext.data.Store',
    config: {
        model: 'NotasErbase.model.Grupo',
        storeId: 'GrupoLocalStore',
        sorters: 'nome',
        autoLoad: true,
        autoSync: true,
        proxy: {
            type: 'localstorage',
            id  : 'grupos-locais'
        }
    }
});
