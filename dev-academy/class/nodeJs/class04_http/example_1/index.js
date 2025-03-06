import http from 'http';

const PORT = 3000;
const HOSTNAME = 'localhost';

const server = http.createServer((request, response) => {
// console.log('Reguest', request);

console.log(`Server has been called on: http://${HOSTNAME}:${PORT}/${request.url}`);
    console.log(`Server has been called on: http://${HOSTNAME}:${PORT}${request.url}`);

if(request.url === '/users') {
    response.end('Here are the users for you...');
} else if (request.url === '/students') {
    response.writeHead(200);
    response.end('Here are the students for you...');
} else if (request.url === '/') {
    response.writeHead(200);
    response.end('Welcome to the Homepage!');
} else {
    response.writeHead(404);
    response.end('Page Not Found!');
}

});
// });

// response.writeHead(200, {
//     'content-type': 'text/html',
// });

// response.end(`
//     <div>
//     <h1>Title</h1>
//     <p>This is amazing!</p>
//     </div>
//     `);
server.listen(PORT, HOSTNAME, () => {
    console.log(`Server started listening at http://${HOSTNAME}:${PORT}`);
});


