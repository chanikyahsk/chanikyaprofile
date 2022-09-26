var uname="hari"

uname.toUpperCase()
'HARI'
uname.toLowerCase()
'hari'

var city = "canada"

city.length
6
city[0]
'c'
city[1]
'a'
city.charAt(0)
'c'
city.charAt(1)
'a'
city.at(0)
'c'
city.at(1)
'a'
city.charAt(-1)
''

var a = "Hari"
var b = "hari"

a == b
false
a.toLowerCase() == b.toLowerCase()
true

var city = "canada"

city.slice(1)
'anada'
city.slice(2)
'nada'
city.slice(2,6)
'nada'
city.slice(0,-1)
'canad'
city.slice(0,-2)
'cana'
city.slice(2,-2)
'na'

var city = "canada"

city.charAt(0).toUpperCase()
'C'
city.slice(1).toLowerCase()
'anada'
city.charAt(0).toUpperCase()+city.slice(1).toLowerCase()
'Canada'

var uname = "  hari "
uname.length
7
uname.trim()
'hari'

var uname = " supriya . "
uname.length
11
uname.trim()
'supriya .'

var a = "I am learning Javascript"
a.replace('Javascript','Js')
'I am learning Js'

var a = "Javascript I am learning Javascript"
a.replace('Javascript','Js')
'Js I am learning Javascript'

var a = "Javascript I am learning Javascript"
a.replace(/Javascript/g,'Js')
'Js I am learning Js'

var uname = " hari . "
uname.replaceAll('','')
' hari . '
uname.replace(/ /g,'')
'hari.'

var a = "https://github.com/Aakashdeveloper/edu_june_intern_22"

a.split('/')
(5) ['https:', '', 'github.com', 'Aakashdeveloper', 'edu_june_intern_22']
var out = a.split('/')
undefined
out[4]
'edu_june_intern_22'
a.split('/')[4]
'edu_june_intern_22'

var a = "Javascript"

a.split('')
(10) ['J', 'a', 'v', 'a', 's', 'c', 'r', 'i', 'p', 't']


var b = ['J', 'a', 'v', 'a', 's', 'c', 'r', 'i', 'p', 't']
undefined
b.toString()
'J,a,v,a,s,c,r,i,p,t'
b.toString().replaceAll(',','')
'Javascript'