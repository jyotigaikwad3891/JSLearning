const arrayNumbers = [20 , 31 ,40 ,25,23,11,29,9,60,2,11];
console.log(`---------------------------step 1------------------------------`);
console.log(`Total number of elements in array is: ${arrayNumbers.length}`);
let element2 = arrayNumbers[2];
console.log(`Element stored at index 2 is: ${element2}`);

console.log(`---------------------------step 2------------------------------`);
var array = [20 , 31 ,40 ,25,23,11,29,9,60,2,11];
let element1 = array[0];
let arrayLength = array.length;
let elementLast = array[arrayLength-3];
console.log(`Third Last element is : ${elementLast}`);

console.log(`---------------------------step 3------------------------------`);
var arrayEven = [20 , 31 ,40 ,25,23,11,29,9,60,2,11];
for (let index = 0; index < arrayEven.length; index++) {
    if (index%2==0) {
        const element = arrayEven[index];
        console.log(element); 
    }
}
console.log(`---------------------------step 4------------------------------`);
var arrayOdd = [20 , 31 ,40 ,25,23,11,29,9,60,2,11];
for (let index = 0; index < arrayOdd.length; index++) {
    if (index%2!==0) {
        const element = arrayOdd[index];
        console.log(element); 
    }
}
console.log(`-----------------------------step 5-----------------------------`);
var arrayEven = [20 , 31 ,40 ,25,23,11,29,9,60,2,11];
for (let index = 0; index < arrayEven.length; index++) {
    if (index%2==0) {
        const element = arrayEven[index];
        console.log(element); 
    }
}
console.log(`-----------------------------step 6-----------------------------`);
var array = [20 , 31 ,40 ,25,23,11,29,9,60,2,11];
let isAvailable = array.includes(155);
console.log(`Is 155 available : ${isAvailable}`);
console.log(`-----------------------------step 7-----------------------------`);
var array = [20 , 31 ,40 ,25,23,11,29,9,60,2,11];
let isAvail = array.includes(23);
console.log(`Is 23 available : ${isAvail}`);
console.log(`-----------------------------step 8-----------------------------`);
var array = [20 , 31 ,40 ,25,23,11,29,9,60,2,11];
array.splice(3,0 ,  55, 66 );
console.log(array);

console.log(`-----------------------------step 9-----------------------------`);
let removedElement = array.splice(4);
console.log(array);
console.log(removedElement);