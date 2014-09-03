EmberInvoice.InvoicelineRoute = Ember.Route.extend({
  model: function(params) {
    return this.get('store').find('invoiceline', params.invoiceline_id);
  }
});

