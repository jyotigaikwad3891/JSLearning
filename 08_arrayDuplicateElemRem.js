let array=[4,5,4,5,8,5,7,8,9,7,8];
function removeDuplicates(array) {
    let unique=[];
    for(i=0;i<array.length; i++){
        if(unique.indexOf(array[i])===-1){
            unique.push(array[i]);
        }
    }
    return unique;
}
console.log(`The Given array is- ${array}`);
console.log(`After removing duplicate elements:`);
console.log(removeDuplicates(array));