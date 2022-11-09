import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
  SubscribeMessage,
  WebSocketGateway,
} from '@nestjs/websockets';
import { Socket } from 'socket.io';

@WebSocketGateway({ cors: true })
export class SessionGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
{
  sessionManager: SocketSession[] = [];

  afterInit(server: Socket) {
    console.log('Session Websocket Init.');
  }

  handleDisconnect(client: Socket) {
    console.log('Session Websocket Client Disconnected ' + client.id);
  }

  handleConnection(client: Socket, ...args: any[]) {
    console.log('Session Websocket Client Connected ' + client.id);
  }

  @SubscribeMessage('sendSessionCreds')
  async onSendSessionCreds(client: Socket, uuid: string) {
    this.updateSessionManager(client, uuid);
  }

  updateSessionManager(client: Socket, uuid: string) {
    const session = this.sessionManager.find((s) => s.uuid === uuid);
    if (!!session) {
      session.clientsSockets.push(client);
      this.sessionManager = [
        ...this.sessionManager.filter((s) => s.uuid !== uuid),
        session,
      ];
    } else {
      this.sessionManager.push({ uuid, clientsSockets: [client] });
    }
  }
}

interface SocketSession {
  uuid: string;
  clientsSockets: Socket[];
}
