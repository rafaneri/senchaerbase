/**
* Define a view que contem as tabs
*/
Ext.define('NotasErbase.view.NotaList',{
    extend: 'Ext.dataview.List',
    xtype: 'notalist',
    requires: ['NotasErbase.model.Nota'],
    doNotaTap: function(list, index, target, record, e, eOpts) {
                
        this.fireEvent('exibirDetalheNota', this);

    },
    config: {
        itemTpl: '' +
        '<div class="notas">{titulo}</div>'
        '',
        grouped: true,
        pinHeaders: false,
        listeners: {
            itemtap: 'doNotaTap'
        }
    }
});