/* global describe, it */

(function () {
    'use strict';

    describe('EmberInvoice.InvoiceModel', function () {
      it('should properly calculate invoiceAmount', function () {
        var invoice;
        Ember.run(function() {
          invoice = EmberInvoice.Invoice.find(0);
        })
        expect(invoice.get('invoiceAmount')).to.equal(70);
      });
    });
})();
