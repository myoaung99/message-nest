import {
  Body,
  Controller,
  Get,
  Inject,
  Injectable,
  NotFoundException,
  Param,
  Post,
} from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';
import { MessageService } from './message.service';

@Controller('messages')
export class MessagesController {
  constructor(private messageService: MessageService) {}

  @Get()
  getmessges() {
    return this.messageService.findAll();
  }

  @Get('/:id')
  async getMessage(@Param('id') id: string) {
    const messageDetail = await this.messageService.findOne(id);
    if (!messageDetail) {
      throw new NotFoundException('message not found');
    }
    return messageDetail;
  }

  @Post()
  createMessage(@Body() body: CreateMessageDto) {
    return this.messageService.create(body.content);
  }
}
