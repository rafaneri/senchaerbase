

Ext.Loader.setConfig({
    paths: {
        Ext: 'res/js'
    }
});
Ext.application({

    name: 'Sencha ERBASE 2015',
    requires: [],
    controllers: [],
    views: [],

    launch: function() {

        Ext.Msg.alert('ERBASE', 'Estamos prontos, vamos lá!', Ext.emptyFn);

    }

});