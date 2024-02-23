import fs from 'fs/promises';
import http from 'http';
import querystring from "querystring";
import {number} from '../3a/number.mjs';
import {handleFile} from '../3b/file.mjs';

const hostname = '127.0.0.1';
const port = 3000;

async function sendFile(res, fileName, contentType) {
    res.writeHeader(200, {"Content-Type": contentType});
    res.write(await fs.readFile(fileName, {encoding: "utf-8"}));
    res.end();
}

const server = http.createServer(async function (req, res) {
    if (req.url.startsWith("/numbers")) {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        let queryObject = querystring.parse(req.url.split("?")[1])
        number(Number(queryObject["min"]) || 0, Number(queryObject["max"]) || 50, (x) => res.write(x + "\n"));
        res.end();
    }
    
    if (req.url.startsWith("/file")) {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        await handleFile("date.txt", new Date().toDateString(), (x) => res.end(x));
    }
    
    if (req.url.startsWith("/to-send-html.html")) {
        sendFile(res, "./5/ToSend.html", "text/html");
    }

    if (req.url.startsWith("/to-send-js.js")) {
        sendFile(res, "./5/to-send-js.js", "text/javascript");
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});