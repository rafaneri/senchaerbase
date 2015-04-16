

Ext.Loader.setConfig({
    paths: {
        Ext: 'res/js'
    }
});
Ext.application({

    name: 'NotasErbase',
    requires: [],
    controllers: [],
    views: [],

    launch: function() {

        Ext.Msg.alert('ERBASE', 'Estamos prontos, vamos lá!', Ext.emptyFn);

    }

});