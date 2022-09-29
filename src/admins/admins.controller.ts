import { Controller, Get, Post, Body, UseGuards, Request} from '@nestjs/common';
import { AdminsService } from './admins.service';
import { JwtAuthGuard } from './jwt-auth.guard';


@Controller('admins')
export class AdminsController {
    constructor(
        private readonly Adminservice: AdminsService
        ) { }

    /* Login */
    @Post()
    async sayAdminAllowed(@Body() body) {
        const token = await this.Adminservice.signin(body.username,body.password);
        return token;
    }

    /* Verify JWT */
    @UseGuards(JwtAuthGuard)
    @Get('token')
    getId(@Request() req){
        return req.user;
    }
}
