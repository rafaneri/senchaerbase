/**
* Define o data store para o objeto Grupo
*/
Ext.define('NotasErbase.store.GrupoStore', {
    extend: 'Ext.data.Store',
    config: {
        model: 'NotasErbase.model.Grupo',
        autoSync: true,
        autoLoad: true,
        sorters: 'nome',
        proxy: {
            type: 'localstorage',
            id  : 'grupos-locais'
        }
    }
});
