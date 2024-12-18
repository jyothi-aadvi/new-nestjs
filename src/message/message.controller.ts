import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';

@Controller('messages') // Use 'messages', not 'message', to match your endpoint
export class MessageController {
    @Get()
    listMessages() {
        return { message: 'List of messages' }; // Sample response
    }

        @Post()
        createMessage(@Body() body: CreateMessageDto) {
            console.log('Received body:', body);
            return {
                message: 'Message received successfully!',
                data: body,
            };
        }

    @Get('/:id')
    getMessage(@Param('id') id: string) {
        console.log(id);
        return { message: `Message with ID: ${id}` };
    }
}
