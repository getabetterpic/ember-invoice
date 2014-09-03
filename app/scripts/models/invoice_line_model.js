/*global Ember*/
EmberInvoice.InvoiceLine = DS.Model.extend({
    description: DS.attr('string'),
    units: DS.attr('number'),
    unitPrice: DS.attr('number'),
    lineAmount: DS.attr('number'),
    status: DS.attr('string')
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
    
    units: 'foo',
    
    unit_price: 'foo',
    
    line_amount: 'foo',
    
    status: 'foo'
    
  },
  
  {
    id: 1,
    
    description: 'foo',
    
    units: 'foo',
    
    unit_price: 'foo',
    
    line_amount: 'foo',
    
    status: 'foo'
    
  }
  
];
