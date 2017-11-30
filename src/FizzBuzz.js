var fizzBuzz = function(num){
  if(!isNaN(num) && isFinite(num) && null!=num && typeof num === 'number'){
    if(num%3===0 && num%5===0) return 'FizzBuzz';
    if(num%3===0) return 'Fizz';
    if(num%5===0) return 'Buzz';
    return num;
  }
  return 'Not-A-Number';
}

for(var i = 1; i < 101 ; i++){
  document.write(fizzBuzz(i)+' ');
}