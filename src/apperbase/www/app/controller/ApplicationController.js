/**
* Define o controlador da aplicação
*/
Ext.define('NotasErbase.controller.ApplicationController', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            main: 'mainview',
            btnAddGrupo: '#btnAddGrupo',
            tabnavigation: 'maintabnavigation',
            notalist: 'notalist',
            grupolist: 'grupolist'
        },

        control: {
            main: {
            },
            btnAddGrupo: {
                tap: 'onAdicionarGrupo'
            },
            tabnavigation:{
                tabItemChange: 'onTabItemChange'
            },
            notalist: {
                exibirNota: 'onExibirNota'
            },
            grupolist: {
                exibirGrupo: 'onExibirGrupo'
            }
        }
    },

    showBtnAddGrupo: function() {
        var btnAddGrupo = this.getBtnAddGrupo();

        if (!btnAddGrupo.isHidden()) {
            return;
        }

        btnAddGrupo.show();
    },

    hideBtnAddGrupo: function() {
        var btnAddGrupo = this.getBtnAddGrupo();

        if (btnAddGrupo.isHidden()) {
            return;
        }

        btnAddGrupo.hide();
    },

    onExibirNota: function(list, index, node, record) {
        console.log('event exibirNota');
    },

    onExibirGrupo: function(list, index, node, record) {
        console.log('event exibirGrupo');
    },

    onAdicionarGrupo: function(el, e, eOpts) {
        console.log('Adicionar Grupo');
    },

    onTabItemChange: function(el, value, oldValue, eOpts) {
        var mainTitleBar = this.getMain().getNavigationBar();
        var text = value.tab.getTitle();
        mainTitleBar.setTitle(text);

        if (el.getActiveItem().xtype == "grupolist") {
            this.showBtnAddGrupo();
        } else {
            this.hideBtnAddGrupo();
        }
    }

});
