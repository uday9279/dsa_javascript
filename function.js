//                  function => it is a block of codes 

function greet_friends(){
    console.log("welcome to function in javasript");
}
greet_friends()

greet_friends()   





//                 sun of two number in function in javasript

function sum(a,b){
    console.log(`sum of ${a} and ${b}`);
    return a+b
}
console.log(sum(4,9));




 
//            factorial of a number in javasript by using javasript
function fact(num){
    if(num==0 || num==1){
    return 1
    }
    result=1;
    for(i=1;i<=num;i++){
       result = result*i;
    }
    return result   
}
console.log(fact(5))








//          In javasript function is known as first class-citizens

const hello_fn=function assign(){
    console.log("function assign to a variable");
}
hello_fn()


const sum_fn=function sum2(a,b){
    return a+b
}
  console.log(sum_fn(7,9));




//               Anonymous function => A function has no name

const anony_fn=function (){
    console.log("inside Anonymous function");
}
anony_fn()

//       function passed as an arguments
function operator(a,b,fn){
     console.log(fn(a,b))
}
function sum2(a,b){
    return a+b
}
operator(5,8,sum2)



//               return function from function

function return_fn(){
    return function(){
        console.log("function return function");
    }
}
return_fn()()

//              Nested function
function fn1(){
    console.log("hello from outer fn");
    return function(){
        console.log("hello from inner fn");
        return function(){
            console.log("hello from inner most fn");
        }
    }
} 

fn1()()()


//          arguments globel object available to all the function

function sum(){
    console.log(arguments);
}
sum(1,6,9)



//       Arrow function => it is concise way of writing javacript function 

const add =(a,b)=>{
    console.log("Inside the Arrow function");
    return a+b
}
console.log(add(4,7));

//      write a Arrow function to find EvenOdd

 evenodd = (num)=>{
   if(num%2==0){
    return "even"
   }else{
    return "odd"
   }
}
console.log(evenodd(8))


//      function inside the object
const person ={
    fullname:function(){
        console.log("uday");
    }
}
person.fullname()