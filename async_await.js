async function printMessage(){
    return "hello friend"
}
//console.log(printMessage());
printMessage().then((msg)=>{
    console.log(msg);
}
)
//      async and await
async function exe(){
    let result = await new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('Hello friends');
    },3000)
    })
    console.log('this is first line');
    console.log(result);
    console.log('this is last line');
    
}
exe();
console.log('uday');