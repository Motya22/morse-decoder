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
  const wordsInNumbers =  expr.split('**********');
  
  const lettersInNumbers = wordsInNumbers.reduce((letters, word) => {
  	const subarray = [];
    
  	for (let i = 0; i < word.length; i += 10) {
      subarray.push(word.slice(i, i + 10));
    }
    
    letters.push(subarray);
    
    return letters;
  }, []);
  
  const lettersInDotsAndDashes = lettersInNumbers.map((word) => word.map((letterInNumber) => {
  	let letterInDotsAndDashes = '';
    
    for (let i = 0; i < letterInNumber.length; i += 2) {
      const twoNumbers = letterInNumber.slice(i, i + 2);
      
      if (twoNumbers === '10') {
        letterInDotsAndDashes += '.';
      } else if (twoNumbers === '11') {
        letterInDotsAndDashes += '-';
      }
    }
    
    return letterInDotsAndDashes;
  }));
  
  const letters = lettersInDotsAndDashes.map((word) => word.map((letter) => MORSE_TABLE[letter]));
  
  const words = letters.map((word) => word.join(''));
  
  return words.join(' ');
}

module.exports = {
    decode
}