EmberInvoice.CustomersNewController = Ember.ObjectController.extend({
  actions: {
    save: function() {
      var self = this;
      var name = this.get('name');
      var address = this.get('address');
      var city = this.get('city');
      var region = this.get('region');
      var postalCode = this.get('postalCode');
      var country = this.get('country');
      var reference = this.get('reference');
      var email = this.get('email');
      var phone = this.get('phone');
      var customer = this.store.createRecord('customer', {
        'name': name,
        'address': address,
        'city': city,
        'region': region,
        'postalCode': postalCode,
        'country': country,
        'reference': reference,
        'email': email,
        'phone': phone
      });
      customer.save().then(function(customer) {
        self.setProperties({
          'name': '',
          'address': '',
          'city': '',
          'region': '',
          'postalCode': '',
          'country': '',
          'reference': '',
          'email': '',
          'phone': ''
        });
        self.transitionToRoute('invoices.new', customer);
      }, function(error) {
        console.log(error);
      });
    }
  }
});