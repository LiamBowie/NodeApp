/**
 * Created by Liam on 23/11/2015.
 */

var http = require('http');
var port = 1337;

var server = http.createServer(function(request, response){
    response.writeHead(200, { 'Content-Type': 'text/plain'});

    response.end('Hello World\n');
});
server.listen(port);
console.log("Server is Listening!");