

console.log(`--------------------------------step1-------------------------------`);

var squre=function(num){
    var result=num*num;
console.log(`The Squre of number is - ${result}`);
return result;
}
squre(5)

squre(6)
squre(25)
squre(100)
squre(67.89)
squre(59)

console.log(`---------------------------------step2---------------------------------`);
console.log(typeof squre);
console.log(`---------------------------------step4---------------------------------`);


console.log(`---------------------------------step3---------------------------------`);
var strOperations = function(word) {
    var words = word.split(" ");
    var strOperations = words.length;
    console.log(`In this given string-${word}`);
    return strOperations;
}
var result=strOperations("JS is most populer language of internet");
console.log(`total wrdcount is -${result}`);

var result= strOperations.length;
console.log(`Total no of character are-${result}`);
console.log(`---------------------------------step3---------------------------------`);


