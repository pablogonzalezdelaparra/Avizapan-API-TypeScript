import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Admins } from './admins.entity';

@Injectable()
export class AdminsService {
    constructor(
        @InjectRepository(Admins)
        private AdminsRepository: Repository<Admins>,
    ) { }

    /* Return all admins */
    async returnAllAdmins() {
        const admins = this.AdminsRepository
            .createQueryBuilder("admins")
            .getMany()
        return admins
    }

}
