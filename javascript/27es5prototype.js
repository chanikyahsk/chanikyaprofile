function human(name,city){
    this.name = name;
    this.city = city;
}

function robot(name,country){
    this.name = name;
    this.age = 10;
    this.country = country
}

var hari = new human('hari','canada')

hari
human {name: 'hari', city: 'canada'}
hari.country
undefined
human.prototype = new robot('hari', 'canada')
robot {name: 'hari', age: 10, country: 'canada'}
var hari = new human('hari','canada')
undefined
hari
human {name: 'hari', city: 'canada'}
hari.country
'canada'