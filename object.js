const obj={
    name:"Uday",
    age:18,
    city:"purnea",
    greet : function(){
        console.log("inside function");
    }
}
console.log(typeof obj);
console.log(obj.greet());
console.log(obj);

//   object constructor
const person = new Object()
console.log(person);

//    creating object by using function()
function emp(id, name){
    this.id = id;
    this.name = name;
}
const emp_obj = new emp(1, "uday");
console.log(emp_obj);

//   dot notation to access object data
var student={
    name:"uday",
    age:18,
    address :{
        city:"purnea",
        country:"india"
    }
}
console.log(student);
console.log(student.age);
console.log(student.address.city);
// using the bracket notation
console.log(student["name"]);


// adding element in null object
var object= {}
object.name="Uday";
object.hobby="cricket";
object["country"]="india"
console.log(object);


// delete certain field
delete object.country;
console.log(object);





