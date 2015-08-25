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
  },

  flattenArrays : function(arr) {
    return arr.reduce(function(prev, curr) {
      return prev.concat(curr);
    });
  },

  phonePad : {
    0: [0, ' '],
    2: [2, 'A', 'B', 'C'],
    3: [3, 'D','E', 'F'],
    4: [4, 'G', 'H', 'I'],
    5: [5, 'J', 'K', 'L'],
    6: [6, 'M', 'N', 'O'],
    7: [7, 'P', 'Q','R','S'],
    8: [8, 'T', 'U', 'V'],
    9: [9, 'W', 'X', 'Y', 'Z']
  },

  presses : function(phrase) {
    var totalPresses = 0;
    phonePad = this.phonePad;
    phrase = phrase.split('');
    for (key in phonePad) {
      for (var i = 0; i < phrase.length; i++) {
        if (phonePad[key].indexOf(phrase[i]) > -1) {
          totalPresses += (phonePad[key].indexOf(phrase[i]));
        }
        else {
          totalPresses += 0;
        }
      }
    };
    return totalPresses;
  }
};
