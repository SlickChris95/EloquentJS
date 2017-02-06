function countChar(str, match){
  var counter = 0;
  for(var i = 0; i < str.length; i++) {
    if(str.charAt(i) ==match){
      counter += 1;
    } 
  }
  return counter;
}
