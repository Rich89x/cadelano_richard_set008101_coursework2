function encode_cypher(){
    var plain_text = document.getElementById("message").value;
    var alphabet = "abcdefghijklmnopqrstuvwxyz";
    var fullAlphabet = alphabet + alphabet + alphabet;
    var cipherOffset = document.getElementById("offset").value;
    cipherOffset = (cipherOffset % alphabet.length);
    var cipherFinish = [];
  
    for(var idx=0; idx<plain_text.length; idx++){
       var letter = plain_text[idx];
       var upper = (letter == letter.toUpperCase());
       letter = letter.toLowerCase();
      
       
      
       input = alphabet.indexOf(letter);
       if(input == -1)
       {
           cipherFinish.push(plain_text[idx]);
       } 
       else 
       {
         var coded = ((input + cipherOffset) + alphabet.length);
         var nextLetter = fullAlphabet[coded];
         if(upper) nextLetter = nextLetter.toUpperCase();
         cipherFinish.push(nextLetter);
         
       }
    }
    document.getElementById("finish").innerHTML = cipherFinish.join("");
    return cipherFinish.join

  }
  
 
  