EmberInvoice.InvoicelineEditController = Ember.ObjectController.extend({
  needs: 'invoiceline',
  actions: {
    save: function(){
      self = this
      this.get('buffer').forEach(function(attr){
        self.get('controllers.invoiceline.model').set(attr.key, attr.value);
      });
      this.transitionToRoute('invoiceline',this.get('model'));
    }
  }
});

