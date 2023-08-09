// 5! = 1 * 2 * 3 * 4 * 5

/*let result = 1; // 3 
for (let index = 1; index <= 5; index++) {
    result = result * index;
}
console.log(`Factorial of 5 is ${result}`);*/

//Assignment:  WAP to find the factorial of numbers: 5, 9, 11, 7


function factorial(num){
    // 5 * 4 * 3 * 2 * 1
    let factorial = 1;
   for(let i=1; i<=num; i++){
    factorial*=i;
    
   }
   return factorial;
}
console.log(`Factorial of 5 is:${(factorial(5))}`);
console.log(`Factorial of 7 is:${(factorial(7))}`);
console.log(`Factorial of 9 is:${(factorial(9))}`);
console.log(`Factorial of 11 is:${(factorial(11))}`);