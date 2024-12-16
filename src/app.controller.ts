import {Controller, Get } from '@nestjs/common';

@Controller('/app')  
export class AppController {
  @Get('/abcd')  
  getHello(): string {
    return 'Hello, World!';
  }
}