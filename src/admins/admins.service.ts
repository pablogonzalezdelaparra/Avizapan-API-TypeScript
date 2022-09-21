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
    async returnAdminAllowed(username, password) {
        const admins = this.AdminsRepository
            .createQueryBuilder("admin")
            .where("admin.username = :username", {username: username,})
            .andWhere("admin.password = :password", {password: password})
            .getOne()
        return admins
    }

}
