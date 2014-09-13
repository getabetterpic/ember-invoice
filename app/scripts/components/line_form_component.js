EmberInvoice.LineFormComponent = Ember.Component.extend({
  model: function() {
    this.modelFor('invoice').get('lines');
  },
  actions: {
    saveLine: function(invoice) {
      var units = this.get('units');
      var unitPrice = this.get('unitPrice');
      var description = this.get('description');
      var store = EmberInvoice.InvoiceLine.store;
      var line = store.createRecord('invoiceLine', {
        'description': description,
        'units': units,
        'unitPrice': unitPrice,
        'invoice': invoice
      });
      line.save().then(function(line) {
        invoice.get('invoiceLines').pushObject(line);
        invoice.save();
      });
      this.set('description', '');
      this.set('units', '');
      this.set('unitPrice', '');
      this.set('lineAmount', '');
    }
  },
  lineAmount: function() {
    var units = this.get('units');
    var unitPrice = this.get('unitPrice');
    if (units === undefined || unitPrice === undefined) {
      return 0;
    } else {
      return units * unitPrice;
    }
  }.property('units', 'unitPrice')
});
