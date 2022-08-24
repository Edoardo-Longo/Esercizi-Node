const {createServer} = require("node:http");
function createApp(){
return createServer((req,res)=>{
    
    res.statusCode=200;
    res.setHeader("Content-type","text/HTML")
    res.end("<html><body><h1>Hello World</h1></body></html>")
})

}
module.exports=createApp;