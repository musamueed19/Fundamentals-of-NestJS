import { Injectable } from '@nestjs/common';

@Injectable()
export class SumService {

    // service of getSum - business logic
    getSum(a, b) {
        return a + b;
    }
}
