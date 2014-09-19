EmberInvoice.InvoiceNewComponent = Ember.Component.extend({
  actions: {
    createInvoice: function() {
      console.log(this);
      var invoiceDate = this.get('invoiceDate');
      var terms = this.get('terms');
      var description = this.get('description');
      var store = EmberInvoice.InvoiceLine.store;
      var invoice = store.createRecord('invoiceLine', {
        'description': description,
        'invoiceDate': invoiceDate,
        'terms': terms,
        'customer': customer,
        'status': 'Active'
      });
      invoice.save().then(function(invoice) {
        customer.get('invoices').pushObject(invoice);
        customer.save();
        this.set('description', '');
        this.set('invoiceDate', '');
        this.set('terms', '');
        EmberInvoice.ApplicationController.transitionTo('invoice', invoice);
      });
    }
  }
});
