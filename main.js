let http = require("http");
http.createServer(function (request, response){
    response.writeHead(200,{"Content-Type":"text/plain"})
    response.end("Hello Word!\n")
}).listen(8081);
console.log("Server running at port 8081")