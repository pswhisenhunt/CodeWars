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
  },

  isDivisble : function(n) {
    return Array.prototype.slice.call(arguments).every(function(value) {
        return !(n % value);
    });
  },

  one : function(arr, func) {
    return arr.filter(func).length === 1;
  },

  gradualIncreaseSum : function() {
    var args = [].slice.call(arguments);
    if (args.length === 0) { return 0 };
    var sum = 0;
    args.forEach(function(number, index) {
      sum += number * (index + 1);
    });
    return sum;
  },

  factorial : function(n) {
    if (n > -1) {
      return n === 0 ? 1 : n * this.factorial(n - 1);
    }
    else {
      return null;
    }
  },

  evensArray : function(values) {
    return values.filter(function(val) {
      return val % 2 === 0;
    });
  }
};
