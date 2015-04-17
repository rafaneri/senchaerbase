/**
* Define o controlador da aplicação
*/
Ext.define('NotasErbase.controller.ApplicationController', {
    extend: 'Ext.app.Controller',
    config: {
        currentTitle: '', // mantém o titulo da view antes de sair para o form
        refs: {
            main: 'mainview',
            btnAdd: '#btnAdd',
            tabnavigation: 'maintabnavigation',
            notalist: 'notalist',
            grupolist: 'grupolist',
            grupoform: 'grupoform'
        },

        control: {
            main: {
                push: 'onMainPush',
                pop: 'onMainPop',
                back: 'onMainBack'
            },
            btnAdd: {
                tap: 'onAdd'
            },
            tabnavigation:{
                tabItemChange: 'onTabItemChange'
            },
            notalist: {
                exibirNota: 'onExibirNota'
            },
            grupolist: {
                exibirGrupo: 'onExibirGrupo'
            },
            grupoform: {
                salvarGrupo: 'onSalvarGrupo',
                removerGrupo: 'onRemoverGrupo'
            }
        }
    },

    onMainPush: function(view, item) {
        this.hideBtnAdd();
    },

    onMainPop: function(view, item) {
        this.showBtnAdd();
    },

    onMainBack: function(view, item) {
        this.setMainTitle(this.getCurrentTitle());
    },

    onAdd: function(el, e, eOpts) {
        this.getMain().push(this.createForm());
    },

    onTabItemChange: function(el, value, oldValue, eOpts) {
        var text = value.tab.getTitle();
        this.setMainTitle(text);
    }, 

    showBtnAdd: function() {
        var btnAdd = this.getBtnAdd();

        if (!btnAdd.isHidden()) {
            return;
        }

        btnAdd.show();
    },

    hideBtnAdd: function() {
        var btnAdd = this.getBtnAdd();

        if (btnAdd.isHidden()) {
            return;
        }

        btnAdd.hide();
    },

    onExibirNota: function(list, index, node, record) {
        console.log('event exibirNota');
    },

    onExibirGrupo: function(list, index, node, record) {
        this.setCurrentTitle(this.getMainTitle());
        if (!this.grupoform) {
            this.grupoform = Ext.create('NotasErbase.view.GrupoForm');
        }
        this.grupoform.setRecord(record, true);
        this.grupoform.setTitle('Editar Grupo');
        this.getMain().push(this.grupoform);
    },

    onRemoverGrupo: function(record) {
        var store = Ext.data.StoreManager.lookup('GrupoStore');
        store.remove(record);
        this.getMain().pop();
        this.setMainTitle(this.getCurrentTitle());
    },

    onSalvarGrupo: function(record) {
        var store = Ext.data.StoreManager.lookup('GrupoStore');
        store.add(record);
        this.getMain().pop();
        this.setMainTitle(this.getCurrentTitle());
    },

    getMainTitle: function() {
        var mainTitleBar = this.getMain().getNavigationBar();
        return mainTitleBar.getTitle();
    },

    setMainTitle: function(title) {
        var mainTitleBar = this.getMain().getNavigationBar();
        mainTitleBar.setTitle(title);
    },

    createForm: function() {
        var form,
            record;
        this.setCurrentTitle(this.getMainTitle());
        if(this.getActiveTab() == 'grupolist') {
            if (!this.grupoform) {
                this.grupoform = Ext.create('NotasErbase.view.GrupoForm');
            }
            this.grupoform.setTitle('Criar Grupo');
            form = this.grupoform;
            record = Ext.create('NotasErbase.model.Grupo');
        }
        form.setRecord(record);
        return form;
    },

    getActiveTab: function() {
        return this.getMain().getActiveItem().getActiveItem().xtype;
    }

});
