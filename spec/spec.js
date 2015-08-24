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
});
