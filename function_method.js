//             call method
/*const person1={
    firstName:"uday",
    lastName:"kumar"
}
const person2={
    fullName:function(city,country){
        console.log(`${this.firstName} ${this.lastName} live in ${city} in ${country}`);
    }
}
person2.fullName.call(person1,"washington","America")














// apply Method=> It is similar to call methond one difference to take argument in function
//     in array form 
function fullName(Name){
     console.log(`welcome ${Name} to ${this.firstName} ${this.lastName}`);
}
let person={
    firstName:"pw",
    lastName:"skills"
}
fullName.apply(person,["uday kumar"])
*/


//      bind method
const obj1={
    firstName:"uday",
    lastName:"kumar"
}
const obj2={
    fullName:function(city,country){
      console.log(`${this.firstName} ${this.lastName} lives in ${city} in ${country}`);
    }
}
const bound=obj2.fullName.bind(obj1);
bound("Bihar","india")
bound("new delhi","india")