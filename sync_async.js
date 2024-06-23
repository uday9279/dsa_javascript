//           synchronous processing
console.log('Hello1');
console.log('Hello2');
function greet(msg){
    console.log(msg);
}
greet('hello,I am Uday')
console.log('hello3');


//           Asynchronous processing
console.log('Hello from the begining');
setTimeout(()=> {
    console.log('Hello from the callback fn');
},3000)
console.log('hello from the end');


//         setInterval
console.log('Hello from the begining');
let count=1;
id=setInterval(()=>{
    console.log('Hello friends');
    if(count==3){
       clearInterval(id)
    }
    count++
    //     clearInterval
    //clearInterval(id)    
},3000)
console.log('Hello from the ends');
