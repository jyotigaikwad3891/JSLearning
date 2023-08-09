const array=[20,3,4,56,90,400,49];
let a1=[20,3,4,56,90,400,49];
a1.push(55,56);
console.log(`Original array: ${array}`);
console.log(`cloned and updated array : ${a1}`);
let a3=array.push(10,25)
console.log(`updated original array: ${array}`);

let clone=[...array,...a1];
console.log(clone);
const arrayEven =[2,30,14,8];
let merge=array.concat(arrayEven);
console.log(merge);
const employee_info={
    emp_id:27,
    emp_name:"John Doe",
    salary:{
        july_month:"40,0000INR",
        aug_month:"50,0000INR",
        jun_month:"65,0000INR"
    },
    address:{
        locality:{
            colony:"OM vrindavan society",
            street:"kanch pokali,432873"
        },
        city:"Mumbai",
        state:"Maharashtra",
        country:"India"
    },
    Mobiles:["+91 8793 3213 43","4322 9879 32","3232 3211 90"]
}
let month=JSON.parse(JSON.stringify(employee_info));//Deep clone
month.salary.july_month= "80,000INR";
console.log(`Employee Details: ${employee_info.salary.july_month}`);
console.log(`New Employee detail: ${month.salary.july_month}`);
let newCountry=JSON.parse(JSON.stringify(employee_info));
newCountry.address.country="United Kingdom";
console.log(`Employee Detail: ${employee_info.address.country}`);
console.log(`New Employee Detail: ${newCountry.address.country}`);

