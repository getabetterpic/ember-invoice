/*global Ember*/
EmberInvoice.Payment = DS.Model.extend({
    amount: DS.attr('number'),
    paymentMethod: DS.attr('string'),
    paymentDate: DS.attr('date'),
    reference: DS.attr('string'),
    notes: DS.attr('string'),
    customer: DS.belongsTo('customer')
});

// delete below here if you do not want fixtures
EmberInvoice.Payment.FIXTURES = [
  {
    id: 0,
    amount: 12,
    payment_method: 'check',
    reference: '1002',
    notes: 'foo',
    customerId: 0
  },
  
  {
    id: 1,
    amount: 'foo',
    payment_method: 'foo',
    reference: 'foo',
    notes: 'foo',
    customerId: 1
  }
  
];
