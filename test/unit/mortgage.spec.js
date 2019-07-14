const expect = require('chai').expect;
const Mortgage = require('../../src/js/lib/Mortgage');

describe('Mortgage Calculator', () => {
    let mortgage = null;

    beforeEach(() => {
        mortgage = new Mortgage();
      });

        it('should check if monthlyPayment function exists', () => {
            expect(mortgage.monthlyPayment).to.exist;
          });
    
        it('The function monthlyPayment must return a value', () => { 
            expect(mortgage.monthlyPayment()).to.not.be.null;
              });
         
        it('should check if variable numberOfPayments is undefined', () => {
            expect(mortgage.numberOfPayments).to.not.be.null;                                                                                                                                                                                      
          });

        it('should check if variable monthlyInterestRateis undefined', () => {
            expect(mortgage.monthlyInterestRate).to.not.be.null;                                                                                                                                                                                      
          });
           
});
