import http from 'http';
import querystring from "querystring";
import {number} from '../3a/number.mjs';
import {handleFile} from '../3b/file.mjs';

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer(async function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});

    if (req.url.startsWith("/numbers")) {
        let queryObject = querystring.parse(req.url.split("?")[1])
        number(Number(queryObject["min"]) || 0, Number(queryObject["max"]) || 50, (x) => res.write(x + "\n"));
        res.end();
    }

    if (req.url.startsWith("/file")) {
        await handleFile("date.txt", new Date().toDateString(), (x) => res.end(x));
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});