import http from 'http';
import fs from 'fs';
import querystring from 'querystring';

import {number} from '../U1/numbers.mjs'
import {readFile} from '../U2/file.mjs'

const handler = function (req, res) {
    if(req.url === "/sendFile"){
        res.writeHead(200, {'Content-Type': 'text/html'});
        let stream = fs.createReadStream("./ToSend.html" );
        stream.pipe(res);
    }
    else if(req.url.indexOf("/number") === 0){
        let queryObject = querystring.parse(req.url.split("?")[1])

        res.writeHead(200, {'Content-Type': 'text/plain'});
        number(Number(queryObject["min"]), Number(queryObject["max"]), (x) => res.write(x+"\n"));
        res.end();
    }
    else if(req.url === "/file"){
        readFile("test.txt", "random text", function(err, content){
            res.end(err ? err :  content);
        })
    }
    else if(req.url.indexOf( "/hello" ) === 0){
        res.writeHead(200, {'Content-Type': 'text/plain'});

        let queryObject = querystring.parse(req.url.split("?")[1])
        res.end("you said: "+queryObject["text"]);
    }
    else
    {
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end("not found");
    }
};

const server = http.createServer(handler);
server.listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');