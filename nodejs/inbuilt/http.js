let http = require('http');

// req > what we send to server (params,queryParams,body) is request
// res > waht server will send us back is reponse

let server = http.createServer((req,res)=>{
    res.write(`<h1>Hii From NodeJs Server Code</h1>`)
    res.end();
})

server.listen(4660)