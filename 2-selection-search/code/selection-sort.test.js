let should = chai.Should();
let expect = chai.expect;
let assert = chai.assert;

// test swap function
describe('Testing "swap" function', function() {
  let numbersTestArray;
  let lettersTestArray;

  beforeEach(function() {
    numbersTestArray = [1, 2, 3, 5, 6, 7];
    lettersTestArray = ['a', 'b', 'c', 'd', 'e', 'f'];
  });


    it('should return undefined', function() {
      expect(swap(numbersTestArray, 0, 3)).to.be.an('undefined');
      expect(swap(numbersTestArray, 1, 2)).to.be.an('undefined');
      expect(swap(lettersTestArray, 0, 3)).to.be.an('undefined');
      expect(swap(lettersTestArray, 1, 2)).to.be.an('undefined');
    });


    it('swap([...], 0, n-1) should swap the first and last elements', function() {
      swap(numbersTestArray, 0, numbersTestArray.length-1)
      swap(lettersTestArray, 0, lettersTestArray.length-1)
      expect(numbersTestArray).to.deep.equal([7, 2, 3, 5, 6, 1])
      expect(lettersTestArray).to.deep.equal(['f', 'b', 'c', 'd', 'e', 'a'])
    });

    it('swap([...], 0, n/2) should swap the first and middle elements', function() {
      swap(numbersTestArray, 0, Math.floor(numbersTestArray.length/2))
      swap(lettersTestArray, 0, Math.floor(lettersTestArray.length/2))
      expect(numbersTestArray).to.deep.equal([5, 2, 3, 1, 6, 7])
      expect(lettersTestArray).to.deep.equal(['d', 'b', 'c', 'a', 'e', 'f'])
    });

    it('swap([...], n/2, n-1) should swap the middle and last elements', function() {
      // your code goes here
    });

});

// testing indexOfMinimum function
describe('Testing "indexOfMinimum" function', function() {

})
