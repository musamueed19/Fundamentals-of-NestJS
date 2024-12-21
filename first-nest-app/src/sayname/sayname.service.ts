import { Injectable } from '@nestjs/common';

@Injectable()
export class SaynameService {
    sayUserName(name) {
        return {
            success: true,
            userName: name,
        }
    }
}
