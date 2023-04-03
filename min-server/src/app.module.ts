import { Module } from '@nestjs/common';
import { RedisModule } from 'nestjs-redis';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EventsModule } from './events/events.module';

@Module({
  imports: [
    EventsModule,
    RedisModule.register({
      url: 'redis://default:redispw@localhost:32769',
      // 其他可选配置项
      // password: 'eric2023',
      // name: 'eric',
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
