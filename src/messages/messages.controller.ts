import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('messages')
export class MessagesController {
  @Get()
  getmessges() {
    console.log('list all messages');
  }

  @Get('/:id')
  getMessage(@Param('id') id: string) {
    console.log('getMessage => id: ' + id);
  }

  @Post()
  createMessage(@Body() body: any) {
    console.log('createMessage => body: ' + body);
  }
}
