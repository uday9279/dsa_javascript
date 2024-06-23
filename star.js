//                   star pattern problemsfor(row=0;row<5;row++){ 
    /*for(column=0;column<5;column++){
        process.stdout.write("*")
    }
    console.log()


for(i=0;i<5;i++){
    process.stdout.write("* ")
}
*/

//                second approach to print *
for(row=0;row<4;row++){
    row_content =""
    for(col=1;col<4;col++){
        row_content=row_content + "* "
    }
    console.log( row_content);
}



for(row=1;row<=5;row++){
    for(col=1;col<=row;col++){
        process.stdout.write("* ")
    }
    console.log()
}

































