var CodeWars = require('./../exercises');

describe('Code Wars', function() {
  describe('morseCodeEncryption()', function() {
    it('should return the corrent morse code when given a word or sentence. Characters are separated by a single space and words are separated by 3 spaces.', function() {
      expect(CodeWars.morseCodeEncryption('HELLO WORLD')).toEqual(".... . .-.. .-.. ---   .-- --- .-. .-.. -..");
    });
  });

  describe('Fix Timmy\'s Regex', function() {
    it('should replace mean, bad, ugly, horrible, and hideous with the word awesome', function() {
      expect(CodeWars.timmysRegex("You're Bad! timmy!")).toEqual("You're awesome! timmy!");
      expect(CodeWars.timmysRegex("You're MEAN timmy!")).toEqual("You're awesome timmy!");
    });
  });
});
