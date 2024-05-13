import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import OpenAI from 'openai';
import { OpenaiController } from './openai.controller';
import { OpenaiService } from './services/openai.service';

@Module({
  controllers: [OpenaiController],
  providers: [
    OpenaiService,
    {
      provide: OpenAI,
      useFactory: (configService: ConfigService) => {
        return new OpenAI({
          apiKey: configService.getOrThrow<string>('OPENAI_API_KEY'),
          organization: 'nesjs-openai',
        });
      },
      inject: [ConfigService],
    },
  ],
})
export class OpenaiModule {}
