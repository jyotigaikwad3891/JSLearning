function evenOdd(num) {
    var result=num;
    if (num%2==0) {
        console.log(`${result} is Even Number`);
    } else {
        console.log(`${result} is Odd Number`);
    }
    return result;
}
evenOdd(45);
evenOdd(70);
evenOdd(67);
evenOdd(98);

console.log(`--------------------------step 2------------------`);

function stringJava(str) {
var strlen=str.length;
if (strlen>=10) {
    console.log(`Given String  is-${str} `);
    console.log(`string lenght is ${strlen}`);
    console.log(`More than 10 characters`);
    
} else {
    console.log(`${strlen} not more than 10`);
}
return strlen;
}
stringJava("JavaScript-ES6");

console.log(`--------------------------step 3------------------`);

function stringjs(strjs) {
    var result=strjs.includes('Java');
    if (result){
        console.log(`String start with Java`);
        
    } else {
        console.log(`String not start with Java`);
        
        
    }
    return result;
    
}

stringjs("JavaScript-ES6");
