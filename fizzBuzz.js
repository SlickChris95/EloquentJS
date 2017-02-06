/* write a program that prints out numbers from 1 to 100. For numbers that are divisible by 3 print 'Fizz', 
for numbers divisible by 5 print 'Buzz'. For numbers that are divisible by both print 'FizzBuzz'. */

for (var i = 0; i <= 100; i++) {
  if (i % 3 ==0 && i % 5 == 0) {
    console.log('FizzBuzz');
  }
  else if ( i % 3 == 0) {
    console.log('Fizz');
  }
  else if ( i % 5 == 0) {
    console.log('Buzz');
  }
  else {
    console.log(i);
  }
}


