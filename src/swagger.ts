import { DocumentBuilder, SwaggerCustomOptions } from '@nestjs/swagger';

export const swaggerDocumentOptions = new DocumentBuilder()
  .setTitle('Sample app')
  .setDescription('Swagger API Doc')
  .setVersion('V1')
  .addOAuth2(
    {
      type: 'oauth2',
      flows: {
        authorizationCode: {
          authorizationUrl: `https://login.microsoftonline.com/${process.env.TENANT_ID}/oauth2/v2.0/authorize`,
          tokenUrl: `https://login.microsoftonline.com/${process.env.TENANT_ID}/oauth2/v2.0/token`,
          scopes: {
            [process.env.SCOPES as string]: 'default scope',
          },
        },
      },
    },
    'oauth2-swagger',
  )
  .build();

export const swaggerSetupOptions: SwaggerCustomOptions = {
  swaggerOptions: {
    persistAuthorization: true,
    oauth2RedirectUrl: process.env.REDIRECT_URL,
    oauth: {
      usePkceWithAuthorizationCodeGrant: true,
      clientId: process.env.CLIENT_ID,
    },
  },
};
