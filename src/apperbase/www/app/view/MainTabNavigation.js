/**
* Define a view que contem as tabs
*/
Ext.define('NotasErbase.view.MainTabNavigation', {
    extend: 'Ext.tab.Panel',
    xtype: "maintabnavigation",
    requires: ['NotasErbase.view.NotaList', 'NotasErbase.view.GrupoList'],
    doActiveItemChange: function(el, value, oldValue, eOpts) {
                
        this.fireEvent('tabItemChange', el, value, oldValue, eOpts);

    },
    config: {
        activeTab: 0,
        ui: 'light',
        tabBar: {
            layout: {
                pack : 'center',
                align: 'center'
            },
            docked: 'bottom'
        },
        defaults: {
            scrollable: true
        },
        items: [
            {
                title: 'Locais',
                xtype: 'notalist',
                store: 'NotaLocalStore',
                iconCls: 'bookmarks',
                cls: 'card'
            },
            {
                title: 'Nuvem',
                html: 'Nuvem',
                iconCls: 'locate',
                cls: 'card'
            },
            {
                title: 'Configurações',
                xtype: 'grupolist',
                store: 'NotaLocalStore',
                iconCls: 'settings',
                cls: 'card'
            }
        ],
        listeners: {
            activeitemchange: 'doActiveItemChange'
        }
    }
});