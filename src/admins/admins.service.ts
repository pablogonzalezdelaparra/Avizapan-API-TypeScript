import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Admins } from './admins.entity';
//JWT
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AdminsService {
    constructor(
        @InjectRepository(Admins)
        private AdminsRepository: Repository<Admins>,
        private jwtService: JwtService
    ) { }


    /* Return all admins */
    async returnAdminAllowed(username) {
        const admins = this.AdminsRepository
            .createQueryBuilder("admin")
            .where("admin.username = :username", {username: username,})
            .getOne()
        return admins
    }

    /* Validate SignIn and Generate JWT */
    async signin(username: any, password: any): Promise<any> {
        const foundUser = await this.returnAdminAllowed(username);
        if (foundUser){
            const passwordBD = foundUser.password;
            if(bcrypt.compareSync(passwordBD, password)){
                const payload = {id: foundUser.id, username: username};
                return {
                    id: foundUser.id,
                    token: this.jwtService.sign(payload)
                };
            }else{
                return null;
            }
        }
        return null;
    }
}
