import { Module } from '@nestjs/common';
import { MessageController } from './message.controller';

@Module({
    controllers: [MessageController], // Declares the controller for this module
})
export class MessageModule {}
