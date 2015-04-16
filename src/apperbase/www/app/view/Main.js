/**
* Define a view principal da aplicação
*/
Ext.define('NotasErbase.view.Main', {
    extend: 'Ext.navigation.View',
    xtype: "mainview",
    requires: ['NotasErbase.view.MainTabNavigation'],
    config: {
        fullscreen: true,
        defaultBackButtonText: 'Voltar',
        useTitleForBackButtonText: false,
        layout: {
            type: 'card'
        },
        navigationBar: {
            id: 'mainTitleBar',
            androidAnimation: false
        },
        items: [{
            title: 'Locais',
            xtype: 'maintabnavigation',
            listeners: {
                activeitemchange: function(el, value, oldValue, eOpts) {
                    var mainTitleBar = Ext.getCmp('mainTitleBar');
                    var text = value.tab.getTitle();
                    mainTitleBar.setTitle(text);
                }
            }
        }]
    }
});