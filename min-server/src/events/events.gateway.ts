import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
  WsResponse,
} from '@nestjs/websockets';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { RedisService } from 'nestjs-redis';
import * as WebSocket from 'ws';

@WebSocketGateway(5090, {
  cors: {
    origin: '*',
  },
  transports: ['websocket'],
})
export class EventsGateway {
  constructor(private readonly redisService: RedisService) {
    console.log('WS is Ready,port is 5000');
  }

  setMessage = async function (key, value) {
    await this.redisService.getClient().set(key, value);
  };

  @WebSocketServer()
  server: WebSocket.Server;

  @SubscribeMessage('events')
  findAll(@MessageBody() data: any): Observable<WsResponse<number>> {
    return from([1, 2, 3]).pipe(
      map((item) => ({ event: 'events', data: item })),
    );
  }

  handleConnection(ws: WebSocket) {
    console.log('WebSocket client connected');
    this.setMessage('eric', 'nb');
    this.redisService
      .getClient()
      .get('eric')
      .then((res) => {
        console.log('get*********', res);
      });
    ws.on('message', (message: string) => {
      console.log(`Received message: ${message}`);

      // Handle incoming messages here

      ws.send(`You sent: ${message}`);
    });

    ws.on('close', () => {
      console.log('WebSocket client disconnected');
    });
  }

  handleDisconnect(ws: WebSocket) {
    console.log('WebSocket client disconnected');
  }

  afterInit(server: WebSocket.Server) {
    console.log(`WebSocket server initialized`);
  }
}
