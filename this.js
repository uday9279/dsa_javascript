/*function name() {
    console.log(this);   //   this represent the global object
}
name()
*/

//        using this inside object
const obj={
    Name:this, //    global obj
    Age:18,
    greet:function()
    {
       console.log(this.Age);   //  refer to the object
    }
}
obj.greet()
console.log(obj);


//                constructor function
function Student(name){
    this.name=name;
}
const toy=new Student("uday");
console.log(toy);
console.log(toy.name);

//               Call
const student={
    name:'uday',
    study:function (class_name,roll_no)
    {
         console.log(`${this.name} is study in ${class_name} and roll no is ${roll_no}`);
    }
}

const person={
    name:'kunal',
}
student.study.call(person,10,15)
student.study('Bca_first year',15)

//                apply
student.study.apply(person,[12,17])  

//               bind

const stu={
    first_name:'rahul',
    inform:function (city,country){
        console.log(`${this.first_name} ${this.last_name} live in ${city} in ${country}`);
    }
}
const person1={
    first_name:'Uday',
    last_name:'kumar',
}
const bound=stu.inform.bind(person1)
bound('purnea','india')
bound('washington','USA')
