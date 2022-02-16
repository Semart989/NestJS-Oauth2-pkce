import { NestFactory } from '@nestjs/core';
import { SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { swaggerDocumentOptions, swaggerSetupOptions } from './swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const document = SwaggerModule.createDocument(app, swaggerDocumentOptions);

  SwaggerModule.setup('api', app, document, swaggerSetupOptions);
  await app.listen(3000);
}
bootstrap();
