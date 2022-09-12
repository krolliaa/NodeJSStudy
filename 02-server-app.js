//import http module
const http = require('http');
//create server
http.createServer(function(request, response) {
    //send http header --->  status: 200 ok + content type: text/html
    response.writeHead(200, {"Content-Type":"text/html"});
    //send message
    response.end("<h1>Hello Node.js Http Server</h1>")
}).listen(8888);
console.log("Server Running at http://127.0.0.1:8888");