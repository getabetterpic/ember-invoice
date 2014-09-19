EmberInvoice.InvoiceController = Ember.ObjectController.extend({
  actions: {
    saveLine: function(line) {
      line.save();
    },
    saveInvoice: function(invoice) {
      invoice.save();
    }
  }
});

