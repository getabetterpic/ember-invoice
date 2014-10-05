EmberInvoice.PaymentsRoute = Ember.Route.extend({
  model: function() {
    return this.modelFor('customer').get('payments');
  }
});

