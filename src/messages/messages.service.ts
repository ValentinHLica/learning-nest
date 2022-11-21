import { MessageAddPayload } from 'src/types/Messages';
import { MessagesRepository } from './messages.repository';

export class MessagesService {
  messagesRepository: MessagesRepository;

  constructor() {
    this.messagesRepository = new MessagesRepository();
  }

  findAll() {
    return this.messagesRepository.findAll();
  }

  findOne(id: string) {
    return this.messagesRepository.findOne(id);
  }

  add(payload: MessageAddPayload) {
    return this.messagesRepository.add(payload);
  }
}
