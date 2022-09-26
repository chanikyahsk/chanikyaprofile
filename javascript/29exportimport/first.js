let dbObj = {}
dbObj.user = [
    {
        "unmae":"hari",
        "city":"canada"
    },
    {
        "uname":"supriya",
        "city":"canada"
    }

]

  dbObj.calc = {
    sum:function(a,b){return a+b},
    sub:(a,b) => {return a-b}
}

//es5
module.exports = dbObj
//es6
//export default dbObj