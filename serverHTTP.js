const http = require("http");

const requestListener = function (request, response) {
    /* request.on("data", chunk => {
        console.log(`Data chunk: ${chunk}`)
    })

    request.on("end", () => {
        //do something
    }) */
    if (request.url == '/') {
        response.writeHead(200, {"Content-Type": "text/html"});
        response.write("Home");
        response.end();
    } else if (request.url == '/users') {
        response.writeHead(200, {"Content-Type": "text/html"});
        response.write(users.html);
        response.end();
    }
}

const server = http.createServer(requestListener);
server.listen(4200);  