/*            Destructuring
let [a,b,c]=[1,2,3];
console.log(c);
*/
const [a,b,c,[d,e,f]]=[1,2,3,[4,5,6]]
console.log(d);
console.log(d[1]);
console.log(f);


//             Destructuring of object
const obj={
    name:'Uday',
    age:19,
    salary:30000,
    address:{
       city:'purnea',
       state:'Bihar',
       country:'India'
    }
}

let {name,age,salary,address:{city,state,country}}=obj
console.log(state);
/*
let {name,age,salary}=obj
console.log(name);


let {name,year,salary}=obj
console.log(year);

let {name,salary,age}=obj
console.log(salary);
*/
