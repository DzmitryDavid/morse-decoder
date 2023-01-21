const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
  let arrNumbers = expr.split('**********');
  let word = arrNumbers.map((nums) =>  {
      const charLength = nums.length / 10;
      let decodeStr = '';
      for (let i = 0; i < charLength; i++) {
        let word = '';
        for (let j = i * 10; j < i * 10 + 10; j += 2) {
          if (nums[j] + nums[j + 1] === '10') {
            word += '.';
          } else if (nums[j] + nums[j + 1] === '11') {
            word += '-';
          }
        }
        decodeStr += MORSE_TABLE[word];
        word = '';
      }
      return decodeStr;
    });
    
  let result = word.join(' ');

  return result;
}

module.exports = {
    decode
}