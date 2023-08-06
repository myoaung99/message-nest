import { MessageRepository } from './message.repository';

export class MessageService {
  messageRepo: MessageRepository;
  constructor() {
    // Don't create dependencies like this
    this.messageRepo = new MessageRepository();
  }

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
