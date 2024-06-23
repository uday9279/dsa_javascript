const emp={
    name:"uday",
    age:18,
    salary:37000,
    address:{
        city:"purnea",
        country:"India"
    }
}
//     Object.keys()=> List of all keys in the object
console.log(Object.keys(emp));

//     Object.values()=> it gives all the values in the object
console.log(Object.values(emp));

//     Object.entries()=> It gives all the key value pairs
console.log(Object.entries(emp));

//     Object.assign()
emp_new=Object.assign({},emp,{role:"developer",workTime:"6 hours"})
console.log(emp_new);


//     Object.freeze()
Object.freeze(emp_new)
emp_new.name="rahul"
console.log(emp_new);

//     Object.isFrozen()
console.log(Object.isFrozen(emp_new));

var obj={
    name:"vishwa",
    age:47
}
console.log(obj);

//    Object.seal()
Object.seal(obj)
obj.name="uday"
console.log(obj);

//     Object.isSealed()
console.log(Object.isSealed(obj));

//     Object.hasOwn()=> It check the key is present or not
console.log(Object.hasOwn(obj,"name"));

//     Object.getOwnPropertyNames => it gives all the keys in the object
console.log(Object.getOwnPropertyNames(obj));

//    Object.getOwnPropertyDescriptors() => it gives detail information of the object
console.log(Object.getOwnPropertyDescriptors(obj));

//                  iterate over the keys
for(k in obj){
    console.log(k);
}

//    Object.defineProperties()=> it change in object property
const obj2={
    name:"uday",
    age:18,
    salary:34000
}
Object.defineProperties(obj2,{
    name:{
        value:"uday kumar",
        enumerable:false, // iteration  is not possible
    }
})
for(k in obj2){
    console.log(k);
}
console.log(obj2);
console.log(obj2.name);