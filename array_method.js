arr=[1,2,3,4,5,6,7]
//          pop()=>delete the last element of an array
console.log(arr.pop())
console.log(arr);
//          push()=>add the elememt at the end
arr.push(8)
console.log(arr);

arr =["apple","mango","papaya"]
arr.pop()
console.log(arr);
arr.push("banana") // it give the length of modified array
console.log(arr);


arr=[2,4,5,6,8,9]
//       shift()=>delete first element of an array
arr.shift()
console.log(arr);



//         unshift()=>add new element in the first position
console.log(arr.unshift(3)) // => it give length of new modified array
console.log(arr);

arr1=[1,2,3]
arr2=[4,5,6]
//       concatenation(adding) of two array
x=arr1.concat(arr2)
console.log(x);


//     join Method => array convert in to string
fruits=["Apple","Banana","orange"]
console.log(result=fruits.join("-"))
console.log(typeof result);
console.log(fruits);


//    slice Methods => sub parts of an array
arr = [1,7,9,5,8,3]
slice_arr=arr.slice(1,4)
console.log(arr);
console.log(slice_arr);
console.log(arr.slice(1,-2));

//           splice Method in array
arr = [1,2,4,7,9,6]
console.log(arr);
console.log(arr.splice(1,0))  // no removed element
console.log(arr);
arr.splice(2,2,14,16,18)
console.log(arr)


//     reversed Method 
arr = [1,2,3,4,5,6]
arr.reverse()
console.log(arr);

//    sort Method
arr=[5,8,9,3,12,14]
arr.sort((a,b)=> a-b)  // ascending order 
console.log(arr);



//       descending order
arr =[8,9,5,7,12,34,21]
arr.sort((a,b)=>b-a)
console.log(arr);

//     toString Method => it convert array in to string
arr =["Apple","Mango","banana"]
x=arr.toString()
console.log(x);
console.log(arr);

//     flat Method  
arr=[4,5,3,[6,9]]
console.log(arr.flat());
console.log(arr);

//    Array.isArray
arr=[1,4,6,9]
console.log(Array.isArray(arr));


