//            forEach
fruits=['Apple','Mango','Banana','Orange']
fruits.forEach(print)
function print(fruits){
     console.log(fruits.toUpperCase());
}

//           map
sqr_arr=[1,4,6,8,7].map((ele)=>ele*ele)
console.log(sqr_arr);


//           filter
ele_arr=[1,2,3,4,5,6,7,8,9,10,13,18].filter(num=> num%2==0)
console.log(ele_arr);