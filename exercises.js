var CHAR_TO_MORSE = require('./utilities/MorseCode');

module.exports = {
  morseCodeEncryption : function(message) {
    return message.toLowerCase().split(' ').map(function(word) {
      return word.split('').map(function(char) {
        return CHAR_TO_MORSE[char];
      }).join(' ');
    }).join('   ');
  },

  timmysRegex : function(sentence) {
    return sentence.replace(/bad|mean|ugly|hideous|horrible/gi, 'awesome');
  }
};
