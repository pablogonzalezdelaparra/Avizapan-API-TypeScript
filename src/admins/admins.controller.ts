import { Controller, Get, Post, Body, Param, HttpStatus} from '@nestjs/common';
import { AdminsService } from './admins.service';
import * as bcrypt from 'bcrypt';
//JWT
import { JwtService } from '@nestjs/jwt';

@Controller('admins')
export class AdminsController {
    constructor(
        private readonly Adminservice: AdminsService,
        private jwtService: JwtService
        ) { }

    /* Login */
    @Post()
    async sayAdminAllowed(@Body() body) {
        const token = await this.Adminservice.signin(body.username,body.password, this.jwtService);
        return token;
    }
}
