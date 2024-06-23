function arr_length(array){
    length =0;
    i=0
    for(i=0;i<array.length;i++){
        length=length+1;
    }
    return length;
}
console.log(arr_length([1,2,3,7,9]))



//      largest element in an array
function large_arr(arr){
    large_no= arr[0];
    for(i=1;i<arr.length;i++){
        if(arr[i]>large_no){
            large_no=arr[i];
        }
    }
    return large_no
}
console.log(large_arr([1,2,3,4,8,14,11]));


function string_reverse(string){
    reversed=""
    for(i=string.length-1;i>=0;i--){
        reversed=reversed+string[i]
    }
    return reversed;
}
console.log(string_reverse("hello friends"));
