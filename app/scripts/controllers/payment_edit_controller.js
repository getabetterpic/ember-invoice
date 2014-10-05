EmberInvoice.PaymentEditController = Ember.ObjectController.extend({
  needs: 'payment',
  actions: {
    save: function(){
      self = this
      this.get('buffer').forEach(function(attr){
        self.get('controllers.payment.model').set(attr.key, attr.value);
      });
      this.transitionToRoute('payment',this.get('model'));
    }
  }
});

