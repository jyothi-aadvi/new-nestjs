import { Controller ,Get , Post} from '@nestjs/common';

@Controller('message')
export class MessageController {
    @Get()
    listMessages(){

    }
    @Post()
    createMessages(){
        
    }
    @Get('/:id')
    getMessages(){
        
    }

}
