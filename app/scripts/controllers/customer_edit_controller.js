EmberInvoice.CustomerEditController = Ember.ObjectController.extend({
  needs: 'customer',
  actions: {
    save: function(customer){
      var self = this;
      customer.save().then(function() {
        self.transitionToRoute('invoices');
      }, function(customer) {
        console.log(customer);
      });
    }
  }
});

