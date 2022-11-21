import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Post,
} from '@nestjs/common';

import { CreateMessageDTO } from './dtos/create-message.dto';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {
  messagesService: MessagesService;

  constructor() {
    this.messagesService = new MessagesService();
  }

  @Get()
  getMessages() {
    return this.messagesService.findAll();
  }

  @Post()
  addMessage(@Body() body: CreateMessageDTO) {
    return this.messagesService.add(body);
  }

  @Get('/:id')
  async getMessage(@Param('id') id: string) {
    const message = await this.messagesService.findOne(id);

    if (message.length === 0)
      throw new NotFoundException(`Message with id: ${id} does not exist`);

    return message[0];
  }
}
