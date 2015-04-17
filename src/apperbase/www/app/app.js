/**
* Define a aplicação sencha touch
*/
var MB = Ext.MessageBox;
Ext.apply(MB, {
        YES: { text: 'Sim', itemId: 'yes', ui: 'action' },
        NO: { text: 'Não', itemId: 'no' }
});
Ext.apply(MB, {
        YESNO: [MB.NO, MB.YES]
});
Ext.Loader.setConfig({
    paths: {
        Ext: '../js'
    }
});
Ext.application({

    name: 'NotasErbase',
    requires: [],
    stores: [
        'NotasErbase.store.GrupoStore', 
        'NotasErbase.store.NotaLocalStore',
        'NotasErbase.store.NotaRemotaStore'
    ],
    controllers: ['NotasErbase.controller.ApplicationController'],
    views: ['NotasErbase.view.Main'],

    launch: function() {

        var main = Ext.create('NotasErbase.view.Main', {fullscreen: true});

    }

});