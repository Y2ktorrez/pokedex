import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //Ruta Global
  app.setGlobalPrefix('api/v2')

  //Validacion Global
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      //Convertir al tipo de dato esperado a todos los DTO
      transform: true,
      transformOptions: {
        enableImplicitConversion: true,
      }
    })
  );

  //Puerto
  await app.listen(3000);
}
bootstrap();
