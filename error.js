console.log('hello from first lines');
try{
x='uday';
console.log(x.toUpperCase());
}catch(err)
{
console.log('I am handle error');
console.log(err);
}finally{
    console.log("Hello, I am uday");
}
console.log('hello from last line');