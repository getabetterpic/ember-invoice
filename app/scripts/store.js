EmberInvoice.ApplicationAdapter = DS.ActiveModelAdapter;

DS.ActiveModelAdapter.reopen({
  host: 'http://localhost:3000',
  buildURL: function(type, id, record) {
    var s = this._super(type, id, record);
    return s + ".json";
  }
});
