let fs = require('fs')

//fs.writeFile('myCode.txt','Hi From NodeJs',() => {
   // console.log('File Created')
//}) 

//fs.appendFile('myText.txt','This is Append File \n',() => {
   // console.log('File Appended')
//})

//fs.readFile('myText.txt','UTF-8',(err,data) => {
    //if(err) throw err;
  //  console.log(data)
//})

//fs.rename('myCode.txt','nodeFile.txt',(err) => {
    //if(err) throw err;
    //console.log('File Renamed')
//})

fs.unlink('nodeFile.txt',(err) => {
    if(err) throw err;
    console.log('File Deleted')
})