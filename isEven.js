function isEven(num){
  if (num == 0)
    return console.log(true);
  else if (num == 1)
    return console.log(false);
  else if (num < 0)
    return isEven(-num);
  else
    isEven(num -2);
}

isEven(50);
isEven(75);
isEven(-1);

