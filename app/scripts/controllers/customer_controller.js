EmberInvoice.CustomerController = Ember.ObjectController.extend({
  actions: {
    erase: function(customer) {
      var self = this;
      var customer = this.get('model');
      customer.destroyRecord().then(function(customer) {
        console.log("destroy record was successful");
        self.transitionToRoute('customers');
      }, function(customer) {
        console.log("error occured:");
        console.log(customer);
      });
    }
  }
});

