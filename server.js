const http = require('http');
const fs = require('fs')
const _ = require('lodash')

const server = http.createServer((req,res)=>{
    console.log('req made')



//response route
res.setHeader('Content-Type','text/html')

let path = './views/';
switch(req.url){
        case '/':
        path +='index.js';
        res.statusCode=200;
        break;

        case '/about':
        path+='about.js'
        res.statusCode=200;
        break;

        case '/about-me':
        res.setHeader('Location','/about')
        res.statusCode=301;
        res.end();
        break;

        

        default:
        path+='/404.js'
        res.statusCode=404;
        break;

}

fs.readFile(path,(err,data)=>{
    if(err){console.log(err)
    res.end()}
    else{res.write(data)
        res.end()

        
    }
})



});
server.listen(3000,(()=>{
    console.log('Listening to the request')
}));
