Array is collection homogenious as well as hetrogenious datatype

let a = ["hii","hello","hey"] >> Array of strings
let b = [3,4,23,37,45,3.11] >> Array of Number
let c = [true,false] >> Array of boolean
let d = ["hii",45,true]

var a = [5,7,3,5]
typeof(a)

'object'

var city = ["india","canada"]

city[0]
'india'
city[1]
'canada'
city.push('us')
3
city
(3) ['india', 'canada', 'us']
city.push('london')
4
city
(4) ['india', 'canada', 'india', 'london']

var a = ['india', 'canada', 'us', 'london']

a.pop()
'london'
a.pop(3)
'us'

push > add in the end of the Array
unshift > add the first value of the array
pop > remove the last value always
shift > remove first value always

slice is the operation of an array is does not effect crossOriginIsolated; value of an array

var a = ['india', 'canada', 'us', 'london']

a.slice(1)
(3) ['canada', 'us', 'london']
a.slice(2)
(2) ['us', 'london']
a.slice(2,5)
(2) ['us', 'london']
a.slice(0,-2)
(2) ['india', 'canada']

var a = ['india', 'canada', 'us', 'london']

a.splice{startIndex,DeleteCount, values}

var a = ['india', 'canada', 'us', 'london']

// remove 2 values from index number 2
a.splice(2,2)
(2) ['us', 'london']
a
(2) ['india', 'canada']

// remove no value but add 2 values on index 3
a.splice(3,0,'us','london')
[]
a
(4) ['india', 'canada', 'us', 'london']

// remove 1 value on index 1 and add 2 values
a.splice(1,1,'paris','nice')
['canada']
a
(5) ['india', 'paris', 'nice', 'us', 'london']

var a = ['india', 'canada', 'us', 'london']

a.indexOf('canada')
1
a.indexOf('india')
0
a.indexOf('london')
3

var c = ['a','b','c',1]
var b  = [2,'d','e','f']
c+b
'a,b,c,12,d,e,f'

c.concat(b)
(8) ['a', 'b', 'c', 1, 2, 'd', 'e', 'f']

var name = "hari";
var b = [1,2,3]

Array.isArray(name)
false
Array.isArray(b)
true

var city = ["india","canada",['red',[1,2,3],'black',"white"],"us","london"]
undefined
city[2]
(4) ['red', Array(3), 'black', 'white']
city[3]
'us'
city[0]
'india'
city[3][0]
'u'
city[3][1][0]
's'