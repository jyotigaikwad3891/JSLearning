
function stringHandsOn() {
    
    console.log(`--------------------------step1---------------------`);
    
    console.log(`Given string is:  hey you are doing good,keep it up  `);
    console.log(`---------------------------step2---------------------`);
    
    
}
stringHandsOn();

var greet="  hey you are doing good,keep it up  ";
var lengthGreet= greet.length;
console.log('Length of String is:', lengthGreet);




console.log(`---------------------------------step3-----------------------`);

var greet = "  hey you are doing good,keep it up  ";
var result = greet.trim();
console.log(`After Trim string is: ${result} `);
console.log(`and it's length is ${result.length}`);
var resultTrimEnd = greet.trimEnd();
var trimEndLength = resultTrimEnd.length; 
var endSpaces = greet.length - trimEndLength;

console.log(`--------------------------------step4-------------------------`);
var charAt0=result.charAt(0);
console.log(`First characyer of string ${charAt0}`);

var charAtLastIndex= result.charAt(result.length-1);
console.log(`Last character of string is ${charAtLastIndex}`);

console.log(`------------------------------step5---------------------------`);

var str=result.split(` `);
var words=str.length;
console.log(`Total no of words are ${words}`);

console.log(`------------------------------step6---------------------------`);

var str = result.indexOf(`good`);
console.log(`Index of 'good' is-${str}`);

console.log(`------------------------------step7---------------------------`);

var str=result.slice(22);
console.log(`Substring starting from index 22 is-${str}`);

console.log(`------------------------------step8---------------------------`);

var str = result.includes('up');
console.log(`String end with word 'up' -: ${str}`);

console.log(`------------------------------step9---------------------------`);

var str = result.includes('hey');
console.log(`String start with word 'hey' -: ${str}`);









