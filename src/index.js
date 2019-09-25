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

function morseConvert(expr, left, right) {
    if(expr[left] === '*')
        return ' ';
    else {
        let subStrCutted = String(parseInt(expr.substring(left, right)));

        let morseStr = '';

        for(let j = 1; j < subStrCutted.length; j+=2){
            if(subStrCutted[j] == '1')
                morseStr = morseStr + '-';
            else morseStr = morseStr + '.';
        }

        return MORSE_TABLE[morseStr];
    }
}

function decode(expr) {
    let result = "";

    for(let i = 0; i < expr.length; i+=10){
        result += morseConvert(expr, i, i+10);
    }

    // console.log(result);

    return result;
}

module.exports = {
    decode
};
