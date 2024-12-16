import { NestFactory } from '@nestjs/core';
import { Module, Controller, Get } from '@nestjs/common';

@Controller()  // This decorator marks the class as a controller
class AppController {
  @Get()  // This decorator defines a route handler for GET requests to the root URL
  getHello(): string {
    return 'Hello, World!';
  }
}

@Module({
  controllers: [AppController],  // Register the controller with the module
})
class AppModule {}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
  console.log('App is running on http://localhost:3000');
}

bootstrap();
