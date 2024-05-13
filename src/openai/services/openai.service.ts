import { Injectable } from '@nestjs/common';
import OpenAI from 'openai';
import { ChatCompletionMessageParam } from 'openai/resources';
import { ChatMessage } from '../dto/create-chat.dto';

@Injectable()
export class OpenaiService {
  constructor(private readonly openAi: OpenAI) {}

  async createChatCompletion(messages: ChatMessage[]) {
    return await this.openAi.chat.completions.create({
      messages: messages as ChatCompletionMessageParam[],
      model: 'gpt-4',
    });
  }
}
