/*global Ember*/
EmberInvoice.Customer = DS.Model.extend({
    name: DS.attr('string'),

    address: DS.attr('string'),

    city: DS.attr('string'),

    region: DS.attr('string'),

    postalCode: DS.attr('string'),

    country: DS.attr('string'),

    reference: DS.attr('string'),

    status: DS.attr('string'),

    email: DS.attr('string'),

    phone: DS.attr('string'),

    companyId: DS.attr('number'),

    createdAt: DS.attr('date'),

    updatedAt: DS.attr('date')
});

// probably should be mixed-in...
EmberInvoice.Customer.reopen({
  attributes: function(){
    var model = this;
    return Ember.keys(this.get('data')).map(function(key){
      return Em.Object.create({ model: model, key: key, valueBinding: 'model.' + key });
    });
  }.property()
});

// delete below here if you do not want fixtures
EmberInvoice.Customer.FIXTURES = [
  
  {
    id: 0,
    
    name: 'foo',
    
    address: 'foo',
    
    city: 'foo',
    
    region: 'foo',
    
    postal_code: 'foo',
    
    country: 'foo',
    
    reference: 'foo',
    
    status: 'foo',
    
    email: 'foo',
    
    phone: 'foo',
    
    company_id: 'foo',
    
    created_at: 'foo',
    
    updated_at: 'foo'
    
  },
  
  {
    id: 1,
    
    name: 'foo',
    
    address: 'foo',
    
    city: 'foo',
    
    region: 'foo',
    
    postal_code: 'foo',
    
    country: 'foo',
    
    reference: 'foo',
    
    status: 'foo',
    
    email: 'foo',
    
    phone: 'foo',
    
    company_id: 'foo',
    
    created_at: 'foo',
    
    updated_at: 'foo'
    
  }
  
];
