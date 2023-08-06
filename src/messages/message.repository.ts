import { readFile, writeFile } from 'fs/promises';

export interface Message {
  id: string;
  content: string;
}

export class MessageRepository {
  private fileName = 'messages.json';

  async findOne(id: string): Promise<Message | string> {
    const messages = await this.readMessages();
    return messages.find((message) => message.id === id) || 'not found';
  }

  async findAll() {
    const messages = await this.readMessages();
    return messages;
  }

  async create(content: string) {
    const newMessage = this.createMessageObject(content);

    const messages = await this.readMessages();
    messages.push(newMessage);

    await this.writeMessage(messages);
    return newMessage;
  }

  private async readMessages(): Promise<Array<Message>> {
    const fileContents = await readFile(this.fileName, 'utf8');
    const data = await JSON.parse(fileContents);
    return data as Array<Message>;
  }

  private async writeMessage(messages: Array<Message>): Promise<void> {
    await writeFile(this.fileName, JSON.stringify(messages, null, 2), 'utf8');
  }

  private createMessageObject(content: string): Message {
    const id = Math.random().toString(36).substr(2, 9);
    return { content, id };
  }
}
