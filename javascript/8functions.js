var a = 10
var b = 20
a+b 
30

  keyword nameof the function (parameters){
    return output
  }

parameters of the functions is not a keyword
  
function add(a,b){
    return a+b
  }

  add(1,2)
  3

  function isEven(userInput){
    let out;
    if(userInput%2 == 0){
      out = `Number ${userInput} is even`
    }else{
      out = `Number ${userInput} is odd`
    }
    return out
  }

  isEven(5)
  'Number 5 is odd'

  isEven(4)
'Number 4 is even'

//////

function add(a,b){
  return a,b
}

add (1,2)
2

function add(a,b){
  return b,a
}

add(1,2)
1

//es6
let add = (a,b) => {return a+b}

function add(a,b){
  var out = [a,b];
  return out
}

add(1,2)
(2) [1, 2]