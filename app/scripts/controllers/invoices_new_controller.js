EmberInvoice.InvoicesNewController = Ember.ObjectController.extend({
  needs: "customer",
  actions: {
    createInvoice: function() {
      var self = this;
      var customer = this.get('customer');
      var invoiceDate = this.get('invoiceDate');
      var terms = this.get('terms');
      var description = this.get('description');
      var store = EmberInvoice.Invoice.store;
      var invoice = store.createRecord('invoice', {
        'description': description,
        'invoiceDate': invoiceDate,
        'terms': terms,
        'customer': customer
      });
      invoice.save().then(function(invoice) {
        customer.get('invoices').pushObject(invoice);
        customer.save();
        self.transitionToRoute('invoice', invoice);
      }, function(invoice) {
        console.log("error");
        console.log(invoice);
      });
    }
  }
});

