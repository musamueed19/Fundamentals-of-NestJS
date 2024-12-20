import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { AnswerDto } from './dto/app.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/askquestion')
  askQuestion(): string {
    return "How are you?";
  }

  @Post('/answer')
  answer(@Body() getAnswerDto: AnswerDto): object {
    return {
      answer: getAnswerDto.answer,
    }
  }
}
