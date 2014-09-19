EmberInvoice.ApplicationAdapter = DS.ActiveModelAdapter;

DS.ActiveModelAdapter.reopen({
  host: 'http://localhost:3000'
});
