EmberInvoice.Router.map(function () {
  this.resource('customers', function(){
    this.resource('customer', { path: '/:customer_id' });
    this.route('edit', { path: '/:customer_id/edit' });
    this.route('create');
  });
  
});
