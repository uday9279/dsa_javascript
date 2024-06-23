
//                    HOF

function calculator(operator,a,b){
    return operator(a,b)
}
operator=(a,b)=>{
    return a+b;
}
console.log(calculator(operator,8,9));

//             First ordered function
function calculate_foodBill(obj){
    if(obj.age<19){
        console.log('you are eligible for 70% discount');
    }
    else{
        console.log('you are eligible for 30% discount');
    }
}
const obj={
    name:'uday',
    age:17
}
calculate_foodBill(obj);


//     Hof => function return function
function greet(){
    return mess  
}
mess=(message)=>{
    console.log(`hello ${message}`);
}
greet()('how are u')


//           Callbacks
function no(fn,a,b){
    return fn(a,b)
}
console.log(no((a,b)=>a*b,9,5))


//        function composition
const twice=x=>x*2;
const sqr=x=>x*x;
const compose=(fn1,fn2,value)=>fn1(fn2(value))
console.log(compose(twice,sqr,6));

//          Callbacks
function calculateMatches(isMatch){
    other_person_match_interest=['l','l','l','r','r','l']
   for(i of other_person_match_interest){
        if(isMatch(i)){
            console.log('yayy,I got a match');
        }
    }
}
calculateMatches((i)=>i=='r')