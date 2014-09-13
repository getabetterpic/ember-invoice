/*global Ember*/
EmberInvoice.InvoiceLine = DS.Model.extend({
  description: DS.attr('string'),
  units: DS.attr('number'),
  unitPrice: DS.attr('number'),
  lineAmount: function() {
    var units = this.get('units');
    var unitPrice = this.get('unitPrice');
    return units * unitPrice
  }.property('units', 'unitPrice'),
  status: DS.attr('string'),
  invoice: DS.belongsTo('invoice')
});

// probably should be mixed-in...
EmberInvoice.InvoiceLine.reopen({
  attributes: function(){
    var model = this;
    return Ember.keys(this.get('data')).map(function(key){
      return Em.Object.create({ model: model, key: key, valueBinding: 'model.' + key });
    });
  }.property()
});

// delete below here if you do not want fixtures
EmberInvoice.InvoiceLine.FIXTURES = [
  
  {
    id: 0,
    description: 'foo',
    units: 2,
    unitPrice: 100.0,
    status: 'foo',
    invoiceId: 0
  },
  
  {
    id: 1,
    description: 'foo',
    units: 1,
    unitPrice: 100.0,
    status: 'foo',
    invoiceId: 1
  }
  
];
