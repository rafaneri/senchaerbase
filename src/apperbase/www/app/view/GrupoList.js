/**
* Define a view que contem a lista de grupos
*/
Ext.define('NotasErbase.view.GrupoList',{
    extend: 'Ext.dataview.List',
    xtype: 'grupolist',
    requires: ['NotasErbase.model.Grupo'],
    doGrupoTap: function(list, index, target, record, e, eOpts) {
                
        this.fireEvent('exibirGrupo', list, index, target, record, e, eOpts);

    },
    config: {
        itemTpl: [
            '<div class="notas">{nome}</div>'
        ].join('')
        // , listeners: {
        //     itemtap: 'doGrupoTap'
        // }
    }
});