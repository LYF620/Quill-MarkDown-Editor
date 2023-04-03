import { IoAdapter } from '@nestjs/platform-socket.io';
import { createAdapter } from '@socket.io/redis-adapter';
import { createClient } from 'redis';

export class RedisIoAdapter extends IoAdapter {
  private adapterConstructor: ReturnType<typeof createAdapter>;

  async connectToRedis(): Promise<void> {
    const pubClient = createClient({ url: `redis://localhost:32768` });
    const subClient = pubClient.duplicate();

    await Promise.all([pubClient.connect(), subClient.connect()]).then((res) =>
      console.log('redis is ready'),
    );

    // this.adapterConstructor = createAdapter(pubClient, subClient);
  }

  async createRoom(id: string) {}
}

export default new RedisIoAdapter();
