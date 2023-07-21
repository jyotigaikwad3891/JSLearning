

var name1 = "sweety"; // sweety
var name2= "cutie"; // cutee
console.log( 'Before Swap==>', 'Name1-',name1 , ' name2-', name2);
var temp = name1;
name1 = name2;
name2= temp;
console.log( 'After Swap==> ','name1-' ,name1, 'name2-',   name2);

console.log("==============================================");

function swap(num1,num2,num3) {

    console.log('Before swap==>num1-',num1,'num2-',num2,'num3-',num3);
    var temp=num1;
    var num1=num2;
    var num2=num3;
    var num3=temp;
    console.log('After swap==>num1-',num1,'num2-',num2,'num3-',num3);
}
    var num1=100;
    var num2=200;
    var num3=300;
    swap(num1,num2,num3);    


