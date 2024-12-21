import { Body, Controller, Post } from '@nestjs/common';
import { SaynameDto } from 'src/dto/sayname.dto';
import { SaynameService } from './sayname.service';

@Controller('sayname')
export class SaynameController {

    constructor(private readonly saynameService: SaynameService) {}
/*
    @Post()
    sayUserName(@Body() saynameBody: SaynameDto): object {
        return this.saynameService.sayUserName(saynameBody.name);
    }
    */
   
   @Post()
   sayUserName(@Body() saynameBody: SaynameDto): object {
       return this.saynameService.sayUserName(saynameBody.name);
   }

}
