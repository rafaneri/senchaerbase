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
        itemTpl: [
            '<div class="notas">{titulo}</div>'
        ].join(''),
        grouped: true,
        pinHeaders: false,
        listeners: {
            itemtap: 'doNotaTap'
        }
    }
});