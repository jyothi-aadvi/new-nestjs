import { Module } from '@nestjs/common';
import { MessageController } from './message.controller';

@Module({
    controllers: [MessageController], // Include the controller here
})
export class MessageModule {}
