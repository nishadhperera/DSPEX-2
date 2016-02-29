var http = require("http");
var url = require("url");

http.createServer(function(request, response){
    response.writeHead(200, {"Content-Type":"text/plain"});
    var params = url.parse(request.url,true).query;

    console.log(params);

    var a = params.number1;
    var b = params.number2;

    var y = plot [0:pi] sin(x)

    response.write(y);
    response.end();
}).listen(8081);

// Console will print the message
console.log('Server running at http://127.0.0.1:8081/');