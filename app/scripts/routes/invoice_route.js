EmberInvoice.InvoiceRoute = Ember.Route.extend({
  model: function(params) {
    return this.get('store').find('invoice', params.invoice_id);
  }
});

