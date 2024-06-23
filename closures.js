/*function fn(){
    let name ='uday';
    console.log(name);
}
fn()
// console.log(name);
*/



//         closures
function outerFn(){
    let outerVar='I am from fn'
    function innerFn(){
        console.log(outerVar);
    }
    return innerFn
}
const stu=outerFn()    //  =>    return inner fn 
//stu()


//              encapulation
function customerCounter(){
   let count=1;
   return function(){
    console.log('New customer count is : ' +count);
    count++;
   } 
}
let counter=customerCounter()
counter()
counter()
