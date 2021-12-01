import {Socket, createServer, Server} from 'net';

// interface Peer
// {
//     host: string;
//     port: number;
// }

interface RendezvousOptions
{
    host?: string;
    port?: number;
}

// enum MessageType {
//     CONNECT = 'connect',
//     HOLEPUNCH = 'holepunch',
// }

class Rendezvous
{
    private _port: number;
    private _host: string;
    private _server: Server;
    // private _peers: Record<string, Peer>

    public constructor(options?: RendezvousOptions)
    {
        this._port = options && options.port || 4321;
        this._host = options && options.host || '';
        // this._peers = {};

        this._server = createServer(this._on_connection.bind(this));
    }

    public listen(): Promise<void>
    {
        return new Promise((resolve) =>
        {
            this._server.on('listening', resolve);
            this._server.listen(this._port, this._host);
        });
    }

    private _on_connection(socket: Socket): void
    {
        socket.on('error', (error) =>
        {
            this._server.close();
            console.log('Error in socket:', error);
        });

        socket.once('close', () => this._on_disconnect(socket.remoteAddress, socket.remotePort));
        socket.on('data', this._on_message.bind(this, socket));

        console.log('New connection received from', socket.remoteAddress, socket.remotePort);
    }

    private _on_message(socket: Socket, data: Buffer): void
    {
        let message;

        try
        {
            message = JSON.parse(data.toString()) as any;
            console.log('Received data from', socket.remoteAddress, socket.remotePort, message);
        }
        catch (error)
        {
            console.log('Error parsing message:', error);
            return;
        }
    }

    private _on_disconnect(remote_address?: string, remote_port?: number): void
    {
        console.log('Connection closed from', remote_address, remote_port);
    }

    public get port(): number
    {
        return this._port;
    }
}

(async () =>
{
    const rendezvous = new Rendezvous();
    
    await rendezvous.listen();

    console.log('Rendezvous server listening on', rendezvous.port);
})();