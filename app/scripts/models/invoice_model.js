/*global Ember*/
EmberInvoice.Invoice = DS.Model.extend({
  invoiceDate: DS.attr('string'),
  description: DS.attr('string'),
  status: DS.attr('string'),
  revision: DS.attr('number'),
  terms: DS.attr('string'),
  customer: DS.belongsTo('customer'),
  invoiceLines: DS.hasMany('invoiceLine', { async: false }),
  invoiceAmount: function() {
    var lines = this.get('invoiceLines');
    var sum = 0;
    lines.forEach(function(line) {
      amt = line.get('lineAmount');
      if (typeof amt === 'number') {
        sum += amt;
      }
    });
    return numeral(sum).format('$0,0.00');
  }.property('invoiceLines.@each.lineAmount')
});

// delete below here if you do not want fixtures
EmberInvoice.Invoice.FIXTURES = [
  {
  id: 0,
  invoiceDate: '2014-08-24',
  description: 'foo',
  status: 'foo',
  revision: 'foo',
  terms: 'foo',
  invoiceLines: [0,2],
  customer: 0
  },
  
  {
  id: 1,
  invoiceDate: '2014-09-01',
  description: 'foo',
  status: 'foo',
  revision: 'foo',
  terms: 'foo',
  invoiceLines: [1],
  customer: 1
  }
];
