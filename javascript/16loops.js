for
whlie >> first check the condition and print the data
do while >> it will print data and check the condition
for of 
for in >> onjects
/////
// it help to itrate over the array as well as print the series //
for(variable,condition,operation){}

for(i=-0;i<5;i++){
    console.log(i)
}
0
1
2
3
4

var city = ['india', 'canada', 'us', 'london']
for(i=0;i<city.length;i++){
    console.log(city[i])
}
 india
 canada
 us
 london

 var city = ['india', 'canada', 'us', 'london']
for(i=0;i<city.length;i++){
    console.log(`<p>${city[i]}</p>`)
}
 <p>india</p>
 <p>canada</p>
 <p>us</p>
 <p>london</p>

 var city = ["india","canada",['red','black',"white"],"us","london"]
 for(i=0;i<city.length;i++){
    if(Array.isArray(city[i])){
    for(j=0;j<city[i].length;j++){
    console.log(city[i][j])
    }
}else{
    console.log(city[i])
}

}
india
canada
red
black
white
us
london

/////while/////
var i= 0
while(i<5){
    console.log(i)
    i++;
}
0
1
2
3
4

/////Do while/////
var i= 0
do{
    console.log(i)
    i++;
}
while(i<5)
0
1
2
3
4

var city = ['india', 'canada', 'us', 'london']
for(mycity of city){
    console.log(mycity)
}
india
canada
us
london

var city = ["india","canada",['red','black',"white"],"us","london"]
for(mycity of city){
    if(Array.isArray(mycity)){
        for(mycolor of mycity){
        console.log(mycolor)
        }
    }else{
        console.log(mycity)
    }
}
 india
 canada
 red
 black
 white
 us
 london