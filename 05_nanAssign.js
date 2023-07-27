console.log(`-------------------------Assignment1------------------------------`);
console.log(`-------------------------Implicit conversion to string-----------------------------------`);
var result='3' +2;
console.log(result);
console.log(`'3'+2;   2 is number type is implicity converted to string`);

console.log(`-------------------------Step 2-----------------------------------`);

var result ='3'+true;
console.log(result);
console.log(`'3'+true;  true is a boolean type is implicity converted to string`);

console.log(`-------------------------Step 3-----------------------------------`);

var result ='3' + undefined;
console.log(result);
console.log(`undefined  is implicity converted to string`);

console.log(`-------------------------Step 4----------------------------------`);

var result ='3' + null;
console.log(result);
console.log(`null is implicity converted to string`);

console.log(`-------------------------Assignment 2-----------------------------------`);
console.log(`---------------Implicit boolean conversion to Number--------------------`);
console.log(`-------------------------step 1-----------------------------------`);
var result ='4' - true;
console.log(result);
console.log(`true value is 1 then 4-1=3 its boolean conversion to number`);

console.log(`-------------------------step 2-----------------------------------`);
var result =4 + true;
console.log(result);
console.log(`4 + true; true value is 1 then 4+1=5 its boolean conversion to number`);

console.log(`-------------------------step 3-----------------------------------`);
var result =4 + false;
console.log(result);
console.log(`4 + false; false value is 0 then 4+0=4 its boolean conversion to number`);

console.log(`-------------------------Assignment 3-----------------------------------`);
console.log(`-------------Implict string conversion to number------------------------`);
console.log(`-------------------------step 1-----------------------------------`);
var result ='4' -'2';
console.log(result);
console.log(`'4' -'2';  4 and 2 Implicit conversion to number 4-2=2 result is 2`);

console.log(`-------------------------step 2----------------------------------`);

var result ='4' - 2;
console.log(result);
console.log(`'4' - 2; 4 is string value Implicit conversion to number 4-2=2 result is 2`);

console.log(`-------------------------step 3----------------------------------`);

var result ='4' * 2;
console.log(result);
console.log(`'4' * 2; 4 is string value Implicit conversion to number 4*2=8 result is 8`);

console.log(`-------------------------step 4----------------------------------`);

var result ='4' /  2;
console.log(result);
console.log(`'4' /  2; 4 is string value Implicit conversion to number 4/2=2 result is 2`);


console.log(`-------------------------Assignment 0C----------------------------------`);
console.log(`-----------------------step 1---------------------------------`);
var result = 0 ==' ';
console.log(result);
console.log(`0 ==' '; == operator to compare the empty string,comparision return true`);

console.log(`-----------------------step 2---------------------------------`);
var result = 0 =='0';
console.log(result);
console.log(`0 =='0'; Result is  true 0 is converted to string implicity`);

console.log(`-----------------------step 3---------------------------------`);
var result = 0 ==false;
console.log(result);
console.log(`0 ==false; Result is  true false is converted to number`);


console.log(`-----------------------step 4---------------------------------`);
var result = null ==undefined;
console.log(result);
console.log(` null ==undefined; Result is  true because same value null and undefined that is empty or blank`);

console.log(`-----------------------step 5--------------------------------`);
var result = 1 ==[1];
console.log(result);
console.log(` 1 ==[1]; Result is  true because both are same type that is number`);

console.log(`-----------------------step 6--------------------------------`);
var result = 1 ==true;
console.log(result);
console.log(`1==true ,Result is  true because true is get converted to number`);


console.log(`-----------------------step 7--------------------------------`);
var result = 1 =='1';
console.log(result);
console.log(`1=='1' ,Result is  true because 1 is string converted into number implicity`);


























































