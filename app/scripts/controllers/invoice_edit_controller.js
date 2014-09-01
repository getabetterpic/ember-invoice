EmberInvoice.InvoiceEditController = Ember.ObjectController.extend({
  needs: 'invoice',
  actions: {
    save: function(){
      self = this
      this.get('buffer').forEach(function(attr){
        self.get('controllers.invoice.model').set(attr.key, attr.value);
      });
      this.transitionToRoute('invoice',this.get('model'));
    }
  }
});

