if(condition){
condition is 1 we use if
it is more than 1 condition we use else if

if condition match it run itself 
if condition is does not match it go for else condition

}else{

}
//////
var a = 10;
if(a%2 == 0){
    console.log(`number ${a} is even`)

}else{
    console.log(`number ${a} is odd`)
}

number 10 is even

//////
let uname = "hari"
if(role == "admin"){
if(uname == "hari"){
    console.log(`hii ${uname} you are admin`)
}else{
    console.log(`hi ${uname} you are unkown`)
}
}else{ 
if(uname=="supriya")
    console.log(`hi ${uname} you are super admin`)
}else{
    console.log(`hi ${uname} you are unkown`)
}

//////
// ternary operator(single line if else)
condition ? if condition is true : if condition is false
var a = 10
a > 10 ? "hii":"bye"
'bye'

var a = 10
a == 10 ? "hii":"bye"
'hii'

var a = 10
a>10? a+1:a-1
9
var a = 10
a==10? a+1:a-1
11
