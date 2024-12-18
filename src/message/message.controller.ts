import { Body, Controller ,Get , Param, Post} from '@nestjs/common';
import { string } from 'mathjs';

@Controller('message')
export class MessageController {
    @Get()
    listMessages(){

    }
    @Post()
    createMessages(@Body() body: any) {
        console.log(body);
    }
   
    @Get('/:id')
    getMessages(@Param('id') id: string) {
        console.log(id);
        
    }

}
