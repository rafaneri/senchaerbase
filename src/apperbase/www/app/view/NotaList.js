/**
* Define a view que contem a lista de notas
*/
Ext.define('NotasErbase.view.NotaList',{
    extend: 'Ext.dataview.List',
    xtype: 'notalist',
    requires: ['NotasErbase.model.Nota'],
    doNotaTap: function(list, index, target, record, e, eOpts) {
                
        this.fireEvent('exibirNota', list, index, target, record, e, eOpts);
        setTimeout(function() {
            list.deselect(index);
        }, 500);

    },
    config: {
        allowDeselect: true,
        plugins: [
            { 
                xclass: 'Ext.plugin.PullRefresh',
                pullText: 'Puxe para atualizar as notas da nuvem'
            }
        ],
        itemTpl: [
            '<div class="notas">{titulo}</div>'
        ].join(''),
        grouped: true,
        listeners: {
            itemtap: 'doNotaTap'
        }
    }
});