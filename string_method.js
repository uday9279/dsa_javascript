//                          at()
let str="hello friend";
console.log(str.at(4));
console.log(str.at(-1));

//         charAt()
console.log(str.charAt(1));

//       concat()
let str1="hello";
let str2="world";
str=str1.concat(" ",str2)
console.log(str);

//         endsWith()
const string="uday kumar";
console.log(string.endsWith('ku',7))


//       includes()
let str_a="hello coder";
console.log(str_a.includes("lo"));  // same ways
console.log(str_a.includes("lo",3));  // same ways


//      padEnd()
let str_b='Hello world';
console.log(str_b.padEnd(15,'_'));

//      padStart()
let str_c="hello world";
console.log(str_c.padStart(15,'|'));

//     repeat()
let str_d=' hello world';
console.log(str_d.repeat(2));


//     replace()
let str_e='hello world';
console.log(str_e.replace('lo w','ab c'));

//    replaceAll()
let str_f='Hello world';
console.log(str_f.replaceAll('l','p'));


//     indexOf() => find index position
let str_g='Javascript is a powerful language';
console.log(str_g.indexOf('is'));


//       search() => find index position 
let text='hello friends ';
console.log(text.search('fri'));


//       splice()
let str_h='Hello friends';
console.log(str_h.slice(3,-3));

//     split()
let str_i='hello world';
console.log(str_i.split('')); // form string to array

//     startsWith()
let str_j="Hello world"
console.log(str_j.startsWith('Hello'));

//    subString => It is similar to slice method but -ve index not included
let str_k='Hello world';
console.log(str_k.substring(3,6));


//   substr( index no index , no of character)
let str_l='Hello world';
console.log(str_l.substr(4,4));


//   toLowerCase()
let str_m='Hello WorlD'
console.log(str_m.toLowerCase());


//    toUpperCase()
let str_n='Hello world';
console.log(str_n.toUpperCase());


//    trimEnd() => Remove white space from end
let str_o=" Hello friend  ";
console.log(str_o.trimEnd());

//     trimStart() => Remove white space from start
let str_p=" hello javascript"
console.log(str_p.trimStart());


//     trim() => Remove white space from both side of the string
let str_q=' hello javascript '
console.log(str_q.trim());
