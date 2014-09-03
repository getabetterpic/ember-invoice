EmberInvoice.InvoicelinesRoute = Ember.Route.extend({
  model: function() {
    return this.get('store').find('invoiceline');
  }
});

