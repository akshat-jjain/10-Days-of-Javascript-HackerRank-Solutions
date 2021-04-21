/*
 * Create the function factorial here
 */
 function factorial(n) {
     var i, sum = 1;
     for (i=n;i>0;i--) {
         sum = sum * i ;
     }
     return sum ;
 }
