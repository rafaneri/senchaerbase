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
            androidAnimation: false,
            items: [
                {
                    xtype: 'button',
                    id: 'btnAddGrupo',
                    iconCls: 'add',
                    align:'right',
                    hidden: true
                }
            ]
        },
        items: [{
            title: 'Locais',
            xtype: 'maintabnavigation'
        }]
    }
});