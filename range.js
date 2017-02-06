var arr =[];
function range(start, finish, step){
  if(step == null){
    step = 1;
  }
  if(step > 0){
  for(var i = start; i <= finish; i += step)
    arr.push(i);
  } else {
    for(i = start; i >= finish; i +=step)
     arr.push(i);
  }
  return arr;
}

function sum(arr){
  var sum =0;
  for(var i =0; i < arr.length; i++){
    sum = sum + arr[i];
  }
  console.log(sum);
}

console.log(range(1,10,2));
console.log(range(20, 2, -1));
sum(arr);