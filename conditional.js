//                     control statement (a) if-else

/**let number="0"
if(number==0){
    console.log(`${number} is zero`)
}else if(number%2==0){
    console.log(`${number} is even`)
}else{
    console.log(`${number} is odd`)
}*/




//                               conditionals operators
/**let a = 30;
let b = 6;
if(b!=0){
    console.log("inside if block");
    console.log(a/b);
}
console.log("outside the if block");
*/



//                            nested conditional operators

let a = 9;
let b = 17;
let c =14;
if(a>=b){
    if(a>=c){
        console.log("A is greater than B and C");
    }else{
        console.log("C is grater than B and A");
    }
}else{
    if(b>=c){
        console.log("B is grater than A and C");
    }else{
        console.log("c is greater than B and A");
    }
}
