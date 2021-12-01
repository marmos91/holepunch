import {Socket} from 'net';

enum ClientMode
{
    UNSET = 'unset',
    LISTEN = 'listen',
    CONNECT = 'connect',
}

export enum MessageType {
    CONNECT = 'connect',
    HOLEPUNCH = 'holepunch',
}

interface RendezvousOptions
{
    host: string;
    port: number;
}

class Client
{
    private _mode: ClientMode;
    private _socket: Socket;
    private _id: string;
    private _rendezvous: RendezvousOptions

    public constructor(id: string, rendezvous: RendezvousOptions)
    {
        this._mode = ClientMode.UNSET;
        this._id = id;
        this._rendezvous = rendezvous;

        this._socket = new Socket();
    }

    public listen(): Promise<void>
    {
        if(this._mode !== ClientMode.UNSET)
            throw new Error(`Client already started in mode "${this._mode}""`);

        this._mode = ClientMode.LISTEN;

        return new Promise<void>((resolve, reject) =>
        {
            this._socket.on('error', reject);
            this._socket.connect(this._rendezvous.port, this._rendezvous.host, async () =>
            {
                await this._send(JSON.stringify({
                    type: MessageType.CONNECT,
                    id: this._id,
                }));

                resolve();
            });
        });
    }

    private _send(message: string): Promise<void>
    {
        return new Promise<void>((resolve, reject) =>
        {
            this._socket.write(message, (error) =>
            {
                if(error)
                    return reject(error);
                
                return resolve();
            });
        });
    }
    

    // public connect_to(remote_id: string): Promise<void>
    // {
    //     if(this._mode !== ClientMode.UNSET)
    //         throw new Error(`Client already started in mode "${this._mode}""`);

    //     this._mode = ClientMode.CONNECT;
    // }

    public get id(): string
    {
        return this._id;
    }
}

(async () =>
{
    console.log('Starting client...');

    const client = new Client('client-1', {host: 'localhost', port: 4321});

    await client.listen();

    console.log(`Client "${client.id}" connected to server`);
})();