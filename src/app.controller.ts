import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiOAuth2, ApiSecurity } from '@nestjs/swagger';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiOAuth2([], 'oauth2-swagger')
  @UseGuards(AuthGuard('oauth2'))
  getHello(): string {
    return this.appService.getHello();
  }
}
