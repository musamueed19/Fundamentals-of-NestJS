import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { AnswerDto } from './dto/app.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // Root Route - endpoint
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  // Customized GET route
  @Get('/askquestion')
  askQuestion(): string {
    return "How are you?";
  }

  // Using Body data as DTO - POST request
  @Post('/answer')
  answer(@Body() getAnswerDto: AnswerDto): object {
    return {
      answer: getAnswerDto.answer,
    }
  }


  // We have to define routes - using Route Parameters - at the end of controllers
  @Get(':id')
  getRouteParam(@Param('id') userId): object {
    return {
      userId: userId, 
    }
  }
}
