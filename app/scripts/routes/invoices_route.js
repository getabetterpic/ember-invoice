EmberInvoice.InvoicesRoute = Ember.Route.extend({
  model: function() {
    return this.modelFor('customer').get('invoices')
  }
});

