// es5
//function language(name,country){
    //this.name = name;
   // this.country = country;
    //this.greet = () => {return `say hi to ${name}`}
// }

//es6
class language1{
    // add declarations
    constructor(name,country){
        this.name = name;
        this.country = country;
    }

    greet = () => {return `say hi to ${name}`}
}

var French = new language1('French','France');
// language1 {name: 'French', country: 'France', greet: ƒ}