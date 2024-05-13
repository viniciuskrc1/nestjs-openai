import { Body, Controller, Post } from '@nestjs/common';
import { ChatCompletion } from './dto/create-chat.dto';
import { OpenaiService } from './services/openai.service';

@Controller('openai')
export class OpenaiController {
  constructor(private readonly openaiService: OpenaiService) {}

  @Post('chat-completion')
  async createChatCompletion(@Body() body: ChatCompletion) {
    return await this.openaiService.createChatCompletion(body.messages);
  }
}
