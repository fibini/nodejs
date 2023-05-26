var http = require('http');
const fs = require('fs')

http.createServer(function (req, res) {
    if (req.url === '/') {
        fs.readFile('index.html', 'utf8', (err, content) => {
          if (err) {
            res.statusCode = 500;
            res.end('Internal Server Error');
          } else {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(content);
          }
        });
      }else if (req.url === '/about') {
        fs.readFile('about.html', 'utf8', (err, content) => {
          if (err) {
            res.statusCode = 500;
            res.end('Internal Server Error');
          } else {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(content);
          }
        });
      }else if (req.url === '/contact-me') {
        fs.readFile('contact-me.html', 'utf8', (err, content) => {
          if (err) {
            res.statusCode = 500;
            res.end('Internal Server Error');
          } else {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(content);
          }
        });
      }else {
        fs.readFile('404.html', 'utf8', (err, content) => {
          if (err) {
            res.statusCode = 500;
            res.end('Internal Server Error');
          } else {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(content);
          }
        });
      }
}).listen(8080);