const map_Demo=new Map();
map_Demo.set("name",'uday')

//     set
map_Demo.set("age",18)
console.log(map_Demo);


//     delete(keys)
map_Demo.delete('age');
console.log(map_Demo);


//    clear
map_Demo.clear()
console.log(map_Demo);


//    entries
const map_A=new Map();
map_A.set('Name','Uday')
map_A.set('hobby','coding')
map_A.set('coding_time',5);
console.log(map_A.entries())


//     get =>It give value of the keys
console.log(map_A.get('Name'))


//     has => It give the key is present or not
console.log(map_A.has('Name'));
console.log(map_A.has('rest'));


//     keys
console.log(map_A.keys());


//     values
console.log(map_A.values());


//     Creating map from an object => Object.entries
const obj={
    name:'uday',
    age:19
}
console.log(typeof obj,obj);
const map_b=new Map(Object.entries(obj))
console.log(map_b);


//      creating object from map =>Object.fromEntries
const map_C=new Map();
map_C.set("name",'Virat')
map_C.set('working','cricket')
console.log(map_C);
const obj2=Object.fromEntries(map_C)
console.log(obj2);
