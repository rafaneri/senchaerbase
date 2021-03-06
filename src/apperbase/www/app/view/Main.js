/**
* Define a view principal da aplicação
*/
Ext.define('NotasErbase.view.Main', {
    extend: 'Ext.navigation.View',
    xtype: "mainview",
    requires: ['NotasErbase.view.MainTabNavigation'],
    config: {
        autoDestroy: false,
        fullscreen: true,
        defaultBackButtonText: 'Voltar',
        useTitleForBackButtonText: false,
        layout: {
            type: 'card'
        },
        navigationBar: {
            id: 'mainTitleBar',
            androidAnimation: false,
            items: [
                {
                    xtype: 'button',
                    id: 'btnAdd',
                    iconCls: 'add',
                    align:'right'
                }
            ]
        },
        items: [{
            title: 'Notas Locais',
            xtype: 'maintabnavigation'
        }]
    }
});