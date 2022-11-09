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
    this.addSessionToSessionManager(client, uuid);
  }

  @SubscribeMessage('sendCodeChange')
  async onSendCodeChange(client: Socket, args: any[]) {
    const session = this.sessionManager.find(
      (sessionItem) => sessionItem.uuid === args[0],
    );
    const otherClientsSockets = session.clientsSockets.filter(
      (socketItem) => socketItem.id != client.id,
    );

    otherClientsSockets.forEach((socketItem) =>
      socketItem.emit('receiveCodeChange', args[1]),
    );
  }

  @SubscribeMessage('disconnectFromSession')
  async onDisconnectFromSession(socket: Socket, uuid: string) {
    this.removeSocketFromSessionManager(socket, uuid);
  }

  addSessionToSessionManager(client: Socket, uuid: string) {
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

    console.log('Yuval debug - ', this.sessionManager);
  }

  removeSocketFromSessionManager(socket: Socket, uuid: string) {
    const session = this.sessionManager.find((s) => s.uuid === uuid);
    session.clientsSockets = session.clientsSockets.filter(
      (socketItem) => socketItem.id != socket.id,
    );
    this.sessionManager = [
      ...this.sessionManager.filter((s) => s.uuid !== uuid),
      session,
    ];

    console.log('Yuval debug - ', this.sessionManager);
  }
}

interface SocketSession {
  uuid: string;
  clientsSockets: Socket[];
}
