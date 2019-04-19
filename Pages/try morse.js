var morse = {
  'a':  '.-',
  'b':  '-...',
  'c':  '-.-.',
  'd':  '-..',
  'e':  '.',
  'f':  '..-.',
  'g':  '--.',
  'h':  '....',
  'i':  '..',
  'j':  '.---',
  'k':  '-.-',
  'l':  '.-..',
  'm':  '--',
  'n':  '-.',
  'o':  '---',
  'p':  '.--.',
  'q':  '--.-',
  'r':  '.-.',
  's':  '...',
  't':  '-',
  'u':  '..-',
  'v':  '...-',
  'w':  '.--',
  'x':  '-..-',
  'y':  '-.--',
  'z':  '--..',
  '1':  '.----',
  '2':  '..---',
  '3':  '...--',
  '4':  '....-',
  '5':  '.....',
  '6':  '-....',
  '7':  '--...',
  '8':  '---..',
  '9':  '----.',
  '0':  '-----',
    " ": "//",
};



  var inp = document.getElementById("inp");
  var butt = document.getElementById("encode_button");
  var butt2 = document.getElementById("decode_button");
  var out = document.getElementById("output");
  var out2 = document.getElementById("output2");
  
  butt.addEventListener("click", function encode_morse() {
    var conv = inp.value;
    conv = conv.toLowerCase();
    conv = conv.split("");
    for (var i = 0; i < conv.length; i++) {
      conv[i] = morse[conv[i]];
    }
    conv = conv.join(" ");
    console.log(conv);
    out.innerHTML = conv;
    
  });

  butt2.addEventListener("click", function decode_morse() {
    var conv = inp.value;
    conv = conv.toLowerCase();
    conv = conv.split("");
    for (var i = 0; i < conv.length; i++) {
      conv[i] = morse[conv[i]];
    }
    conv = conv.join(" ");
    console.log(conv);
    out.innerHTML = conv;
    
  });







  






         
    
    
    
    
   
