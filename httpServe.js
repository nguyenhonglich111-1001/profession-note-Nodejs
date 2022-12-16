const http = require("http");

var routes = {
    "/": function index(request, response) {
        response.writeHead(200);
        response.end("Hello, World!");
    },
    "/foo": function foo(request, response) {
        response.writeHead(200);
        response.end('You ar viewing "Foo" bro!');
    },
};

http.createServer((request, response) => {
    if (request.url in routes) {
        return routes[request.url](request, response);
    }

    response.writeHead(404)
    response.end(http.STATUS_CODES[q404])
}).listen(1337);
