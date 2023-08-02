let array= ["Banana","Orange","Apple","Mango","WaterMelon"];
console.log(`--------------------step 1--------------------`);

let element1 = array[0];
console.log(`Element stored at index 1 is: ${element1}`);
let arrayLength = array.length;
let elementLast = array[arrayLength-1];
console.log(`Last element is : ${elementLast}`);
console.log(`--------------------step 2--------------------`);
array.unshift("Mango");
console.log(array);

console.log(`--------------------step 3--------------------`);
array.shift();
console.log(array);

console.log(`--------------------step 4--------------------`);
array.push("Pineapple");
console.log(array);
console.log(`--------------------step 5--------------------`);
 array.splice(1,1,"Kiwi");
console.log(array);
console.log(`--------------------step 6--------------------`);
console.log(array.slice(1, 4));
console.log(`--------------------step 7--------------------`);

console.log(array.slice(3,6));
