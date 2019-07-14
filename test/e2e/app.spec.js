const express = require('express');
const expect = require('chai').expect;
const path = require('path');
const Nightmare = require('nightmare');

const app = express();

app.use(express.static(path.join(__dirname, '../../public')));
app.use(express.static(path.join(__dirname, '../../dist')));

const url = 'http://localhost:8888';

const nightmare = new Nightmare();

describe('End to End Tests', () => {
  let httpServer = null;
  let pageObject = null;

  before((done) => {
    httpServer = app.listen(8888);
    done();
  });

  beforeEach(() => {
    pageObject = nightmare.goto(url);
  });

  after((done) => {
    httpServer.close();
    done();
  });

  // This is where your code is going to go
  it('should contain a <h1> element for the page title', () => { 
    return pageObject
      .evaluate(() => document.querySelector('h1').innerText)
      .then(headerText => {
        expect(headerText).to.not.be.null;
        expect(headerText).to.equal('Mortgage Calculator');
      });
  });

  it('should contain input element called principal that takes in principal amount', () => {
    return pageObject
    .goto(url)
    .type('input[name=principal]', 0)
        expect('input[name=principal]').to.not.be.null;
        // expect('input[name=principal]').to.equal(Number);
});

it('should contain input element called interestRate that takes in an interest rate', () => {
  return pageObject
  .goto(url)
  .type('input[name=interestRate]', 0)
      expect('input[name=interestRate]').to.not.be.null;
      // expect('input[name=principal]').to.equal(Number);
});

it('checks that the third input element is called loanTerm', () => { 
  return pageObject
    .evaluate(() => document.querySelector('input:nth-child(4)').name)
    .then(elTitle => {
      expect(elTitle).to.equal('loanTerm');
    });
});

  it('should check first option element for the period title Monthly', () => { 
    return pageObject
      .evaluate(() => document.querySelector('option').innerText)
      .then(optionValue => {
        expect(optionValue).to.not.be.null;
        expect(optionValue).to.equal('Monthly');
      });
  });

  it('should check second option element for the period title Quarterly', () => { 
    return pageObject
      .evaluate(() => document.querySelector('option:nth-child(2)').innerText)
      .then(optionValue => {
        expect(optionValue).to.not.be.null;
        expect(optionValue).to.equal('Quarterly');
      });
  });

  it('should check for a button element called Calculate', () => { 
    return pageObject
      .evaluate(() => document.querySelector('button').innerText)
      .then(optionValue => {
        expect(optionValue).to.not.be.null;
        expect(optionValue).to.equal('Calculate');
      });
  });

  it('should correctly calculate mortgage', () =>
  pageObject
  .wait()
  .type('input[name=principal]', 300000)
  .type('input[name=interestRate]', 3.75)
  .type('input[name=loanTerm]', 30)
  .select('select[name=period]', 12)
  .click('button#calculate')
  .wait('#output')
  .evaluate(() => document.querySelector('#output').innerText)
  .then((outputText) => {
    expect(outputText).to.equal('$1389.35');
  })
).timeout(6500);
})