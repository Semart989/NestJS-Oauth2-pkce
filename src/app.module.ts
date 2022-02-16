import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { AadOauthStrategy } from './AadOauthStrategy';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [AppController],
  providers: [AadOauthStrategy, AppService],
})
export class AppModule {}
