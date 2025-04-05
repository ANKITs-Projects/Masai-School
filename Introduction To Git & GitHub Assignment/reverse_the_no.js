/*You are given a number stored in a variable with the namenum 
You have to reverse the number For example, 
the number stored in the variable num = 971, then the required output will be 179*/

function reverseNo(num) {
  let reverse = 0;

  while (num > 0) {
    reverse = reverse * 10 + (num % 10);
    num = parseInt(num / 10);
  }
  return reverse;
}

console.log(reverseNo(1523));
