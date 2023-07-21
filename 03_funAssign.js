
function show() {
    console.log('------------Step 1-------------------');
    console.log("Function with no argument and no return type");
    console.log("This is show function");
    console.log('------------Step 2-------------------');
    
}
show();

function personalDetail(value) {
    
    console.log(value);
    
}
personalDetail("First Name-Jyoti ");
personalDetail("Last Name-Gaikwad");
personalDetail("CollegeName-Sinhgad institute of business Management,kamlapur");

console.log('----------------------Step 3------------------------');

function swapValues(arg1,arg2) 
{

    console.log('Before Swap arg1=>',arg1,'arg2=>',arg2);
    var temp=arg1;
    var arg1=arg2;
    var arg2=temp;
    console.log('After Swap arg1=>',arg1,'arg2=>',arg2);

    
}
var arg1="Virat";
var arg2= "Anushka";
swapValues(arg1,arg2);


var arg1=1000;
var arg2=2000;
swapValues(arg1,arg2);

console.log('-----------------------step4--------------------');

function addThreeValues(num1,num2,num3)
 {
    var result=num1+num2+num3;
    console.log('Addition is==>',result);
    
      
      return result;
    
}

var num1=10.23;
var num2=600;
var num3=40;
var result= addThreeValues(num1,num2,num3);

var num1='Hello';
var num2='Good';
var num3='Morning';
var result=addThreeValues(num1,num2,num3);

console.log('---------------Step5-------------------');

function bankDetails(bankName,accountNo,pinCode) {

    console.log('bankName',bankName,'accountNo',accountNo,'pinCode',pinCode);
    
}

bankName="CITI Bank";
accountNo=342443341;

pinCode=43124321;
bankDetails(bankName,accountNo,pinCode);

bankName="Axis Bank";
accountNo=237133332;

pinCode=43124321;
bankDetails(bankName,accountNo,pinCode);

bankName="HDFC Bank";
accountNo=9879843341;

pinCode=438124321;
bankDetails(bankName,accountNo,pinCode);




