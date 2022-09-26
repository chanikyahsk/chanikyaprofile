class geo{
constructor(){
    this.lat = 43.22;
    this.long = 32.98
}
}

class language1 extends geo{
    constructor(name,country){
        super()
        this.name = name;
        this.country = country;
    }

    greet = () => {return `say hi to ${name}`}
}

var French = new language1('French','France');
console.log(French)

//language1 {
   // lat: 43.22,
   // long: 32.98,
   // greet: [Function: greet],
   // name: 'French',
   // country: 'France'
  // }