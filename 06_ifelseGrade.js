var voteEligible=function(age) {
    var ageValue = +age;
    if (age<=0 || age>=120 ||isNaN(ageValue) ) {
        console.log(`${ageValue} your age ${age} is invalid data`); 
    } else {
        // if block to handle all valid scenarios
        if (age>=18) {
            console.log(`${ageValue} you are eligible for vote`);
        } else {
            console.log(`${ageValue} you are not eligible for vote`);
        }
    }
}
voteEligible(45);
voteEligible(17);
voteEligible(8);
voteEligible(20);
voteEligible(-10);
voteEligible(200);
voteEligible(0);
voteEligible(undefined);
voteEligible(null);
voteEligible(3);