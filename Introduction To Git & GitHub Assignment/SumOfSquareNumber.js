/*Given a non-negative integerk,
 decide whether there're two integers a and b 
 such that a^2+ b^2= k. 
 
for the values a = 3, b = 4 , the sum of square = a*a + b*b = 3*3 + 4*4 = 25 ,which is equal to 25

Thus the output is true.

In the second sample test case, the value stored is = 7

there is no value of a and b exists, which will be equal to c = 7

Thus the output is false.
 */



function compare(a,b,value){
  
    return a**2 +b**2 ==value? true :false
    
  }
  
console.log(compare(3,4,25))