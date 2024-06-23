//                                   break => terminate switch or loop

console.log("using break;");

for(i=0;i<5;i++){
    if(i==3){
        break;
    }
    console.log("please have food");
}



//                                continue

console.log("using continue");

for(i=0;i<5;i++){
    if(i==3){
        continue;
    }
    console.log("please have food " + i);
}




//                                continue

for(i=1;i<=10;i++){
    if(i%3==0){
        continue;
    }
    console.log(i);
}