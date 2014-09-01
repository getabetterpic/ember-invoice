EmberInvoice.Router.map(function () {
  this.resource('customers', function(){
    this.resource('customer', { path: '/:customer_id' }, function(){
      this.route('edit');
    });
    this.route('create');
  });
  
});
