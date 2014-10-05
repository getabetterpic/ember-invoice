EmberInvoice.PaymentRoute = Ember.Route.extend({
  model: function(params) {
    return this.get('store').find('payment', params.payment_id);
  }
});

