EmberInvoice.Router.map(function () {
  this.resource('customers', function(){
    this.route('new');
    this.resource('customer', { path: '/:customer_id' }, function() {
      this.route('edit', { path: '/edit' });
      this.route('erase');
      this.resource('invoices', { path: '/invoices' }, function() {
        this.resource('invoice', { path: '/:invoice_id' });
          this.route('print');
        this.route('new', { path: '/new' });
      });
    });
    this.route('edit', { path: '/:customer_id/edit' });
    this.route('create');
  });
  this.resource('invoice_lines', function(){
    this.resource('invoice_line', { path: '/:invoice_line_id' });
    this.route('edit', { path: '/:invoice_line_id/edit' });
    this.route('create');
  });
});
