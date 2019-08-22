// write tests here
const chai = require("chai");
const scoreCalculator = require("../index.js");
var expect = chai.expect;
var should = chai.should();

describe("Score Calculator", function() {
  it("Should be a function", function() {
    expect(scoreCalculator).to.be.a("function");
  });
  it("Total should equal score", function() {
    const total = scoreCalculator([1, 5, 11]);
    total.should.equal(15);
  });
  it("Total should equal -1 if no points are made", function() {
    const total = scoreCalculator([]);
    total.should.equal(-1);
  });
  it("Bonus 100 points if all radiuses are lses than 5", function() {
    const total = scoreCalculator([1, 2, 3]);
    total.should.equal(130);
  });
});
