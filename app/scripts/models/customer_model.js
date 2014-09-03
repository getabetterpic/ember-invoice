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
  //company: DS.belongsTo('company'),
  invoices: DS.hasMany('invoice', { async: true }),
  createdAt: DS.attr('date'),
  updatedAt: DS.attr('date')
});

// probably should be mixed-in...
// allows calling model.attributes to return all attributes
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
    name: 'Mr. Colton Kihn',
    address: '884 Jenkins Trail',
    city: 'Port Jolieport',
    region: 'MD',
    postal_code: '23275',
    country: 'US',
    reference: '',
    status: 'Active',
    email: 'orion@walsh.co.uk',
    phone: '685-307-6793',
    invoices: [0]
  },
  {
    id: 1,
    name: 'Nedra Krajcik II',
    address: '89474 Batz Tunnel',
    city: 'East Lillianbury',
    region: 'DC',
    postal_code: '89912-4703',
    country: 'US',
    reference: '',
    status: 'Active',
    email: 'nolan.gleichner@maggio.name',
    phone: '1-242-778-4556',
    invoices: [1]
  }
];
