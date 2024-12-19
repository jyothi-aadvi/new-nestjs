import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { MessageModule } from './message/message.module';

async function bootstrap() {
    const app = await NestFactory.create(MessageModule); 
    app.useGlobalPipes(new ValidationPipe()); 
    await app.listen(3000); 
    console.log('App is running on http://localhost:3000');
}

bootstrap();
