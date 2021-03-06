var CodeWars = require('./../exercises');

describe('Code Wars', function() {
  describe('morseCodeEncryption()', function() {
    it('should return the corrent morse code when given a word or sentence. Characters are separated by a single space and words are separated by 3 spaces.', function() {
      expect(CodeWars.morseCodeEncryption('HELLO WORLD')).toEqual(".... . .-.. .-.. ---   .-- --- .-. .-.. -..");
    });
  });

  describe('timmysRegex()', function() {
    it('should replace mean, bad, ugly, horrible, and hideous with the word awesome', function() {
      expect(CodeWars.timmysRegex("You're Bad! timmy!")).toEqual("You're awesome! timmy!");
      expect(CodeWars.timmysRegex("You're MEAN timmy!")).toEqual("You're awesome timmy!");
    });
  });

  describe('isDivisble()', function() {
    it('should return true if the first argument is divisble by all of the other arguments', function() {
      expect(CodeWars.isDivisble(12,3,4,6,2)).toEqual(true);
      expect(CodeWars.isDivisble(8,3,4,2,5)).toEqual(false);
      expect(CodeWars.isDivisble(3,3,4)).toEqual(false);
    });
  });

  describe('one()', function() {
    it('should accept an array and a function. The function should return true is exactly one item in the array is true', function() {
      expect(CodeWars.one([1,2,3,4,5], function(item) { return item < 2})).toEqual(true);
      expect(CodeWars.one([1,2,3,4,5],function(item) {return item % 2})).toEqual(false);
    });
  });

  describe('gradualIncreaseSum()', function() {
    it('should return the accumulatd sum of each value passed into the function times it\'s index, starting at 1', function() {
      expect(CodeWars.gradualIncreaseSum(100,200,300)).toEqual(1400);
      expect(CodeWars.gradualIncreaseSum()).toEqual(0);
    });
  });

  describe('factorial', function() {
    it('should return the factorial value of the number passed in, or 1 it 0 is passed in or null if given a negative value', function() {
      expect(CodeWars.factorial(0)).toEqual(1);
      expect(CodeWars.factorial()).toEqual(null);
      expect(CodeWars.factorial(-3)).toEqual(null);
      expect(CodeWars.factorial(5)).toEqual(120);
    });
  });

  describe('evensArray()', function() {
    it('should return a new array with only the even number', function() {
      expect(CodeWars.evensArray([2,4,5,7,8])).toEqual([2,4,8]);
    });
  });

  describe('flattenArrays()', function() {
    it('should take an array of arrays and return a single array', function() {
      expect(CodeWars.flattenArrays([[1,2],[3,4],[5,6]])).toEqual([1,2,3,4,5,6]);
    });
  });

  describe('presses()', function() {
    it('should take a string of text and return the number of keypresses it takes to create that string on a traditional telephone pad', function() {
      expect(CodeWars.presses('LOL')).toEqual(9);
      expect(CodeWars.presses('HOW R U')).toEqual(13);
      expect(CodeWars.presses('B4 2MORROW')).toEqual(17);
    });
  });

  describe('createPhoneNumber()', function() {
    it('should return a properly formatted phone number when given an array of 10 integers (0-9)', function() {
      expect(CodeWars.createPhoneNumber([3,3,6,2,3,4,5,6,7,8])).toEqual('(336)234-5678');
    });
  });
});
