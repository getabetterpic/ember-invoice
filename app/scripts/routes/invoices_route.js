EmberInvoice.InvoicesRoute = Ember.Route.extend({
  model: function() {
    return this.get('store').find('invoice');
  }
});

