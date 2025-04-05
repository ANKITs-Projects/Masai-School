/*
A happy number is a number defined by the following process:

Starting with any positive integer, replace the number by the sum of the squares of its digits.

Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.

Those numbers for which this processends in 1are happy.
*/

function isHappyNo(n) {
  let cycle = {};
  let happy = false;
  while (true) {
    let s = n.toString();
    let sum = 0;
    for (let i of s) {
      sum = sum + parseInt(i) ** 2;
    }
    if (cycle[sum] === 1) {
      happy = false;
      break;
    } else {
      cycle[sum] = 1;
    }
    n = sum;
    if (n === 1) {
      happy = true;
      break;
    }
  }
  return happy ? "Happy No" : "Not Happy No";
}

console.log(isHappyNo(198));
