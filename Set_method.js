let setDemo=new Set();
setDemo.add(1)
setDemo.add('a')


//         add
setDemo.add(2)
console.log(setDemo);


//         delete
setDemo.delete(2)
console.log(setDemo);


//         clear
setDemo.clear()
console.log(setDemo); 


//         entries
let Data=new Set();
Data.add('Mangoes')
Data.add(4)
console.log(Data.entries())
console.log(Data);
console.log(Data.size);


//        has
console.log(Data.has(4));  
console.log(Data.has('a')); 


//        values
console.log(Data.values());


//      creating set from array
const arr=[1,2,4,5,2,1,8]
const set_arr=new Set(arr);
console.log(set_arr);


//       creating an Array from set
const set_a=new Set();
set_a.add('a')
set_a.add('b')
set_a.add('c')
console.log(Array.from(set_a));


//       keys
console.log(Data.keys());
