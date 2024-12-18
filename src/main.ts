import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { MessageModule } from './message/message.module';

async function bootstrap() {
    const app = await NestFactory.create(MessageModule); // Ensure the module is correct
    app.useGlobalPipes(new ValidationPipe()); // Validation setup
    await app.listen(3000);
    console.log('App is running on http://localhost:3000');
}

bootstrap();
