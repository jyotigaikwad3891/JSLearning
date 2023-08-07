
let personGK={
    empId: 2223,
    state:"MH",
    designation:"Tech Lead",
    city: "Pune",
    isMarried: true,
    empId: 2023
    show:function(){
        console.log(`Inside the show function`);
    }
}
console.log(personGK);
console.log(typeof personGK);

console.log(`EMP ID: ${personGK.empId}`);
console.log(`EMP City: ${personGK["city"]}`);
let isMarried = personGK.isMarried;
console.log(isMarried );

personGK.city="Mumbai";
console.log(personGK);

delete personGK.designation;
console.log(personGK);

personGK.show();

let array=[];

let bamk={
    bankName:"SBI Bank",
    accountNo:23414444,
    ifscCode: sbi322
     address:{
        street:"Wakad main Road",
        pin: 42312,
        landmark:"Near Petrol Pump",
        telphone: "02312123",
        city: "Pune",
        state : "MH",
        country : "India"
     }
    
}
let city=bamk.address.city;



