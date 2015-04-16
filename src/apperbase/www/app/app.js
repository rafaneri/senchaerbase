/**
* Define a aplicação sencha touch
*/
Ext.Loader.setConfig({
    paths: {
        Ext: '../js'
    }
});
Ext.application({

    name: 'NotasErbase',
    requires: [],
    controllers: ['NotasErbase.controller.ApplicationController'],
    views: ['NotasErbase.view.Main'],

    launch: function() {

        var main = Ext.create('NotasErbase.view.Main', {fullscreen: true});

    }

});