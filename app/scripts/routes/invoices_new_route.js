EmberInvoice.InvoicesNewRoute = Ember.Route.extend({
  setupController: function(controller, model) {
    this._super(controller, model);
    controller.set('customer', this.modelFor('customer'));
  }
});