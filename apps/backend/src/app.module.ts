import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { DbModule } from './db/db.module';
import { EventosModule } from './eventos/eventos.module';

@Module({
  imports: [EventosModule, DbModule],
  controllers: [AppController],
})
export class AppModule {}
