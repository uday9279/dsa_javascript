

//                                  loop in javasripts (for loop)
console.log();
console.log("Even Number");
console.log();


for(i=1;i<=20;i++){
   if(i%2==0){
    console.log(i);
   }
}

console.log();
console.log("even number in other method");
console.log();

for(i=2;i<=20;i+=2){
    console.log(i);
}



//                              for loop two variables
console.log();
console.log("for loop multiples variables");
console.log();

for(i=0,j=10;i<j;i++,j--){
    console.log("hello world i j :" +i +","+j);
}


//               nested for loop
console.log();
console.log("nested for loop");
console.log();

for(person=1;person<=5;person++){
    console.log("welcome person " +person);
    for(food=1;food<3;food++){
        console.log("feeding the food " + food);
    }
}

//                    while loop
console.log();
console.log("drinking eligible by using while loop");
console.log();

let age=15;
while(age<19){
    console.log("drinking is not allowed "+ age);
    age+=1;
}


//             while loop(continue)
console.log();
console.log("while loop continue use");
console.log();

right_swap=10;
while(right_swap>=0){
    if(right_swap==3 || right_swap==7 || right_swap==9){
        right_swap=right_swap-1;
        continue;
    }
    console.log("keeping right swap " + right_swap);
    right_swap=right_swap-1;
}






//              do while loop => it executed atleast once
console.log();
console.log("examples of do while loop");
console.log();

let s=7;
do{
    console.log("hello connection " +s);
    s--
}while(s>5)











