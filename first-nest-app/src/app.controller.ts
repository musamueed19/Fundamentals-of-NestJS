import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  Req,
  Res,
} from '@nestjs/common';
import { AppService } from './app.service';
import { AnswerDto } from './dto/app.dto';
import { SumService } from './service/sum/sum-service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly sumService: SumService,
  ) {}

  // Root Route - endpoint

  // Modifying the route to handle request and response
  @Get()
  getHello(@Req() req, @Res() res): void {
    // return this.appService.getHello();

    // getting client-side request data
    console.log(req);
    console.log('----------');
    console.log(req.headers);

    // Now returing customized response
    res.status(200).json({
      success: true,
      res: this.appService.getHello(),
    });
  }

  // Customized GET route
  @Get('/askquestion')
  askQuestion(): string {
    return 'How are you?';
  }

  // Using Body data as DTO - POST request

  // We are now updating our 'answer' route to respond on the basis of request body sent
  @Post('/answer')
  answer(@Body() getAnswerDto: AnswerDto, @Req() req, @Res() res): void {
    let response, status;

    if (req.body.answer?.includes('fine')) {
      response = 'Alhamdulliah, I am also fine';
      status = 200;
    } else {
      response = 'Oh! What happened?';
      status = 400;
    }
    res.status(status).json({
      success: status < 500,
      res: {
        answer: response,
      },
    });
  }

  // Now, we are creating an end point
  @Get('/sum')
  sumOfTwoNums(@Query('n1') a, @Query('n2') b): object {
    return {
      sum: this.sumService.getSum(+a, +b),
    };
  }
  
  // We have to define routes - using Route Parameters - at the end of controllers
  // @Get(':id')
  // getRouteParam(@Param('id') userId): object {
    //   return {
  //     userId: userId,
  //   };
  // }
  
  // Now we are Here to modify our above endpoint more scaleable, robust, and more functional
  @Get(':id')
  getQueryStrings(
    @Query('name') userName,
    @Query('role') userRole,
    @Param('id') userId,
  ): object {
    return {
      userId,
      userName,
      userRole,
    };
  }
  

}