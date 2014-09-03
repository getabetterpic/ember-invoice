/*global Ember*/
EmberInvoice.Invoice = DS.Model.extend({
  invoiceDate: DS.attr('date'),
  description: DS.attr('string'),
  customerId: DS.attr('number'),
  status: DS.attr('string'),
  revision: DS.attr('number'),
  terms: DS.attr('string'),
  createdAt: DS.attr('date'),
  updatedAt: DS.attr('date'),
  customer: DS.belongsTo('customer'),
  invoiceLines: DS.hasMany('invoiceLine'),
  invoiceAmount: DS.attr('number')
  //invoiceAmount: function() {}.property('@invoiceLine')
});

// delete below here if you do not want fixtures
EmberInvoice.Invoice.FIXTURES = [
  {
  id: 0,
  invoiceDate: '2014-08-24',
  description: 'foo',
  customerId: 0,
  status: 'foo',
  revision: 'foo',
  terms: 'foo',
  invoiceAmount: 200.00
  },
  
  {
  id: 1,
  invoiceDate: '2014-09-01',
  description: 'foo',
  customerId: 1,
  status: 'foo',
  revision: 'foo',
  terms: 'foo',
  invoiceAmount: 100.00
  }
];
