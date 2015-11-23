/**
 * Created by Liam on 23/11/2015.
 */

var http = require('http');
var port = 1337;

var server = http.createServer(function(request, response){
    response.writeHead(200, { 'Content-Type': 'text/plain'});
    response.write("<!DOCTYPE 'html'>");
    response.write("<html>");
    response.write("<head>");
    response.write("<title>Hello World Page</title>");
    response.write("</head>");
    response.write("<body>");
    response.write("<h1>");
    response.write("Hello World!");
    response.write("</h1>");
    response.write("</body>");
    response.write("</html>");
    response.end('Hello World\n');
});
server.listen(port);
console.log("Server is Listening!");