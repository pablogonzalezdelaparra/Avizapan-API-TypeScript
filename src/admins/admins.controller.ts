import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { AdminsService } from './admins.service';

@Controller('admins')
export class AdminsController {
    constructor(private readonly Adminservice: AdminsService) { }

    /* Get all admins */
    @Get()
    async sayCategories() {
        var admins = await this.Adminservice.returnAllAdmins();
        return admins;
    }
}
