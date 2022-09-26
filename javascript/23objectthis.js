//let firstname = "hari";
//let lastname = "supriya";

//let sayhi = {
  //  firstname:'hari',
  //  lastname:'supriya',
    //greet:function(){
      ///  return `say hi to ${firstname} ${lastname}`;

   // }
// }

//console.log(sayhi.greet())
//say hi to hari supriya

let firstname = "hari";
let lastname = "supriya";

let sayhi = {
    firstname:'supriya',
    lastname:'hari',
    greet:function(){
        return `say hi to ${this.firstname} ${this.lastname}`;

    }
}

console.log(sayhi.greet())
//say hi to supriya hari
