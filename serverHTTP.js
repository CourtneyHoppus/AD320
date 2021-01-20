const http = require("http");
const fs = require("fs");

const requestListener = function (request, response) {
    if (request.url == '/users') {
        fs.readFile("users.html", function (error, pgResp) {
            if (error) {
                response.writeHead(404);
                response.write("Nope.");
            } else {
                response.writeHead(200, {"Content-Type": "text/html"});
                response.write(pgResp);
            }
            response.end();
        });
    } else if (request.url == '/') {
        response.writeHead(200, {"Content-Type": "text/html"});
        response.write('<h3>Home Page</h3>');
        response.end()
    } else if (request.method == "POST") {
        let body = ''
        request.on('data', (data) => {
            body += data
        }).on('end', () => {
            response.writeHead(200, {"Content-Type": "text/html"});
            response.write('<h3>JSON POST</h3>');
            response.write(`<pre>${body}</pre>`)
            response.end()
        })
    } else {
        response.end('Invalid Request.')
    }
}

const server = http.createServer(requestListener);
server.listen(8080);