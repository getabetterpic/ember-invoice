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
    customer: DS.belongsTo('customer')
});

// probably should be mixed-in...
EmberInvoice.Invoice.reopen({
  attributes: function(){
    var model = this;
    return Ember.keys(this.get('data')).map(function(key){
      return Em.Object.create({ model: model, key: key, valueBinding: 'model.' + key });
    });
  }.property()
});

// delete below here if you do not want fixtures
EmberInvoice.Invoice.FIXTURES = [
  
  {
    id: 0,
    invoice_date: 'foo',
    description: 'foo',
    customer_id: 'foo',
    status: 'foo',
    revision: 'foo',
    terms: 'foo',
    created_at: 'foo',
    updated_at: 'foo'
    
  },
  
  {
    id: 1,
    invoice_date: 'foo',
    description: 'foo',
    customer_id: 'foo',
    status: 'foo',
    revision: 'foo',
    terms: 'foo',
    created_at: 'foo',
    updated_at: 'foo'
    
  }
  
];
