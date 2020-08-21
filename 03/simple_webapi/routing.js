const http = require('http');
const url = require('url');
const server = http.createServer((req, res) => {
    const pathName = req.url;
    if (pathName === '/overview') {
        res.end('This is the OVERVIEW');
    } else if (pathName === '/product') {
        res.end('This is the PRODUCT');
    } else {
        res.writeHead(404);
        res.end('Page not found!!');
    }
});
server.listen(8000, '127.0.0.1', () => {
    console.log('Listening to request on port 8000');
});