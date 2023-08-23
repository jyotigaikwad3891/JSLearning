// 1.Object Destructuring
let student={
    rollNo:2223,
    state:"MH",
city:"Pune",
college:"COPE Pune"
}
//let state=student.state;
//let college=student.college;
//let city=student.city;
let{state,college,city,pin=432134}=student;
console.log(state,city,college,pin);

// 1.Array Destructuring
let Array=[4,5,6,7,8,9];
let[num1,num2,num3,num4=0]=Array;
console.log(num1,num2,num3,num4);