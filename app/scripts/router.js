EmberInvoice.Router.map(function () {
  this.resource('customers', function(){
    this.resource('customer', { path: '/:customer_id' });
    this.route('edit', { path: '/:customer_id/edit' });
    this.route('create');
  });
  this.resource('invoices', function(){
    this.resource('invoice', { path: '/:invoice_id' });
    this.route('edit', { path: '/:invoice_id/edit' });
    this.route('create');
  });
  
});
