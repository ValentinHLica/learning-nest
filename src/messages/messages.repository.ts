import { writeFileSync, readFileSync } from 'fs';
import { join } from 'path';

import { MessageAddPayload, MessageItem } from '../types/Messages';

export class MessagesRepository {
  messagesPath = join('messages.json');

  async findAll() {
    const data = JSON.parse(
      readFileSync(this.messagesPath).toString(),
    ) as MessageItem[];

    return data;
  }

  async findOne(id: string) {
    const data = JSON.parse(
      readFileSync(this.messagesPath).toString(),
    ) as MessageItem[];

    return data.filter((item) => item.id.toString() === id);
  }

  async add(payload: MessageAddPayload) {
    const data = JSON.parse(
      readFileSync(this.messagesPath).toString(),
    ) as MessageItem[];

    data.push({
      id: data.length,
      content: payload.content,
    });

    writeFileSync(this.messagesPath, JSON.stringify(data));

    return data;
  }
}
