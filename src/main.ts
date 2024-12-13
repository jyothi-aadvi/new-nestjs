import { NestFactory } from '@nestjs/core';
import { Module, Controller, Get } from '@nestjs/common';

@Controller()
class AppController {
  // Correct usage of @Get() decorator
  @Get() 
  getHello(): string { // Make sure the return type matches
    return 'Hello, World!';
  }
}

@Module({
  controllers: [AppController],
})
class AppModule {}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
  console.log('App is running on http://localhost:3000');
}

bootstrap();
