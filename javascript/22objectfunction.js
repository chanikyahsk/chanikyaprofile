let calc = {
    sum:function(a,b) {return a+b},
    sub:(a,b) => {return a-b}
}

calc.sum(5,9)
14
calc.sub(9,4)
5

////
function language(name,country){
    this.name = name;
    this.country = country;
    this.greet = () => {return `say hi to ${name}`}
}
var Telugu = new language('Telugu','India')

Telugu
language {name: 'Telugu', country: 'India', greet: ƒ}
Telugu.greet()
'say hi to Telugu'

let English = new language('English','England')

English
language {name: 'English', country: 'England', greet: ƒ}
