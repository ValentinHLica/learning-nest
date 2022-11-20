import { Body, Controller, Get, Param, Post } from '@nestjs/common';

import { CreateMessageDTO } from './dtos/create-message.dto';

@Controller('messages')
export class MessagesController {
  @Get()
  getMessages() {
    return 'get All';
  }

  @Post()
  addMessage(@Body() body: { content: CreateMessageDTO }) {
    return body;
  }

  @Get('/:id')
  getMessage(@Param('id') id: string) {
    return id;
  }
}
