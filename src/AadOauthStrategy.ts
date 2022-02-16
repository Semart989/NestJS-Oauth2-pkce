import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { IProfile, BearerStrategy } from 'passport-azure-ad';

@Injectable()
export class AadOauthStrategy extends PassportStrategy(
  BearerStrategy,
  'oauth2',
) {
  constructor(configService: ConfigService) {
    var options = {
      identityMetadata: `https://login.microsoftonline.com/${configService.get(
        'TENANT_ID',
      )}/v2.0/.well-known/openid-configuration`,
      clientID: configService.get('CLIENT_ID'),
      issuer: `https://sts.windows.net/${configService.get('TENANT_ID')}/`,
      audience: configService.get('AUDIENCE'),
      loggingLevel: 'debug',
      passReqToCallback: false,
      loggingNoPII: false, // for debug purpose
    };
    super(options);
  }

  async validate(response: IProfile) {
    if (!response) return null;
    return response;
  }
}
