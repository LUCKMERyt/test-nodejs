const http = require('http');
const fs = require('fs');

let server = http.createServer((req, res) => {

    // res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'}); // ? для отображения текста в виде обычного текста, а не HTML
    // res.end('Привет, я сервер на Node.js!')

    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' }); // ? для отображения текста в виде HTML, а не обычного текста
    // res.end('Привет, я сервер на <b>Node.js!</b> ')

    if (req.url === '/') 
        fs.createReadStream('./templas/index.html').pipe(res)
    else if (req.url === '/about') 
        fs.createReadStream('./templas/about.html').pipe(res)
    else
        fs.createReadStream('./templas/error.html').pipe(res)
})

const PORT = 3000;
const HOST = 'localhost';

server.listen(PORT, HOST, () => {
    console.log(`Сервер запущен по адресу http://${HOST}:${PORT}`)
})