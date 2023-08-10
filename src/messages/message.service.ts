import { Injectable } from '@nestjs/common';
import { MessageRepository } from './message.repository';

@Injectable()
export class MessageService {
  constructor(private messageRepo: MessageRepository) {}

  findAll() {
    return this.messageRepo.findAll();
  }

  findOne(id: string) {
    return this.messageRepo.findOne(id);
  }

  create(content: string) {
    return this.messageRepo.create(content);
  }
}
