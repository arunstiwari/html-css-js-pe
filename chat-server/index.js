const {createServer} = require('http');
const staticHandler = require('serve-handler');
const ws  = require('ws');

const server = createServer((req,res) => {
    return staticHandler(req, res, {public: 'www'});
})

const wss = new ws.Server({server});

wss.on('connection', client => {
    console.log('client was connected');
    client.on('message', msg => {
        console.log('message arrived with content : ',msg);
        broadcast(msg);
    })
})

function broadcast(msg){
    for (const client of wss.clients){
        client.send(msg);
    }
}

server.listen(8090);