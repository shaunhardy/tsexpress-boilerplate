import * as http from 'http';
import App from './App';

const port = process.env.PORT || 3000;
App.set('port', port);

const server = http.createServer(App);
server.on('error', onError);
server.on('listening', onListening);
server.listen(port);

function onError(error: NodeJS.ErrnoException): void {
    if (error.syscall !== "listen") throw error;
    switch (error.code) {
        case 'EACCES':
            console.error(`Port ${port} requires elevated privileges.`)
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(`Port ${port} is already in use.`);
            process.exit(1);
            break;
        default:
            throw error;
    }
}

function onListening(): void {
    console.log(`Listening on port ${port}.`);
}
