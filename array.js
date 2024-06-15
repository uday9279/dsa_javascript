let array_num = [1,2,3,4,5]
console.log(array_num);
// find the element in the given index
console.log(array_num[0]);
console.log(array_num[2]);
// find the length of Array
console.log(array_num.length);


// other way to define array
arr = Array(1,4,7,9)
console.log(arr);

//   creating array by using array constructor way
cons = new Array(5,2,6)
console.log(cons);
// iterate an array
for(i=0;i<cons.length;i++){
    console.log(cons[i]);
}
//   delete element from array
delete cons[1]
console.log(cons);


//  find the sum of the element in array
function sum(arr){
    sum =0
    for(i=0;i<arr.length;i++){
        sum=sum+arr[i]
    }
    return sum
}
console.log(sum([4,5,6]));

//   iterate an array foreach loop
arr=[1,2,3,4,5,6]
for(num of arr){
    console.log(num);
}

//       sum of element in array without function
arr=[1,2,3,4,5,6]
sum =0
for(i=0;i<arr.length;i++){
    sum=sum+arr[i]
}
console.log(sum);



