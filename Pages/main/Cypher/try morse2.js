var alphabet = {
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
  '.--.-':  'á',
  '.-.-':   'ä',
  '..-..':  'é',
  '--.--':  'ñ',
  '---.':   'ö',
  '..--':   'ü',
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
    "//": "  ",
};



  var inp = document.getElementById("inp");
  var butt = document.getElementById("decode_button");
  var out = document.getElementById("output2");
  
  
  butt.addEventListener("click", function decode_morse() {
    var conv = inp.value;
  
    words = conv.split(/\s{3,}|\.{5,7}/);;
    for (var i = 0; i < words.length; i++) {
      var word = words[i];
        word = word.replace(/^\s+/, '');
        word = word.replace(/\s+$/, '');
        word = word.replace(/\s+/, ' ');
        words[i] = word;
    }
    var plain = '';
    for (var i = 0; i < words.length; i++) {
      var word = words[i];
      var chars = word.split(' ');
      for (var j = 0; j < chars.length; j++) {
          var char = chars[j];
          if (alphabet[char]) {
            var letter = alphabet[char];
          }
          else {
            var letter = '?'
          }
          plain += letter;
      }
      plain += ' ';
    }
    
    console.log(plain);
    out.innerHTML = plain;
    
  });





  






         
    
    
    
    
   
