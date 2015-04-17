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
            notaform: 'notaform',
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
            notaform: {
                salvarNota: 'onSalvarNota',
                removerNota: 'onRemoverNota'
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
        this.setCurrentTitle(this.getMainTitle());
        if (!this.notaform) {
            this.notaform = Ext.create('NotasErbase.view.NotaForm');
        }
        this.notaform.setRecord(record, true);
        this.notaform.setTitle('Editar Nota');
        this.getMain().push(this.notaform);
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

    onSalvarNota: function(record) {
        var store = Ext.data.StoreManager.lookup('NotaLocalStore');
        store.add(record);
        this.getMain().pop();
        this.setMainTitle(this.getCurrentTitle());
    },

    onRemoverNota: function(record) {
        var store = Ext.data.StoreManager.lookup('NotaLocalStore');
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

    onRemoverGrupo: function(record) {
        var store = Ext.data.StoreManager.lookup('GrupoStore');
        store.remove(record);
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
        } else if(this.getActiveTab() == 'notalist') {
            if (!this.notaform) {
                this.notaform = Ext.create('NotasErbase.view.NotaForm');
            }
            this.notaform.setTitle('Criar Nota');
            form = this.notaform;
            record = Ext.create('NotasErbase.model.Nota');
        }
        form.setRecord(record);
        return form;
    },

    getActiveTab: function() {
        return this.getMain().getActiveItem().getActiveItem().xtype;
    }

});
