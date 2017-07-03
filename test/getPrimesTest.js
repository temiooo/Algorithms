var expect    = require("chai").expect;
var getPrimes = require("../getPrimes");

describe("Get an array of prime numbers less than number", function() {

   it("it should return 'Input is not a number' if input is 'Amber'", function(){
   	expect(getPrimes('Amber')).to.equal("Input is not a number");
  });

    it("it should return [] if input is -1", function(){
  		expect(getPrimes(-1)).to.eql([]);
  });

  it("it should return [] if input is 0", function(){
  	expect(getPrimes(0)).to.eql([]);
  });

   it("it should return [] if input is 1", function(){
  	expect(getPrimes(1)).to.eql([]);
  });

    it("it should return [2] if input is 2", function(){
  	expect(getPrimes(2)).to.eql([2]);
  });

    it("it should return [2,3] if input is 3", function(){
  	expect(getPrimes(3)).to.eql([2,3]);
  });

 it("it should return [2,3] if input is 4", function(){
  	expect(getPrimes(4)).to.eql([2,3]);
  });

 it("it should return [2,3,5] if input is 5", function(){
  	expect(getPrimes(5)).to.eql([2,3,5]);
  });

 it("it should return [2,3,5,7] if input is 10", function(){
  	expect(getPrimes(10)).to.eql([2,3,5,7]);
  });

 it("it should return [2,3,5,7,11,13] if input is 16", function(){
  	expect(getPrimes(15)).to.eql([2,3,5,7,11,13]);
  });
});